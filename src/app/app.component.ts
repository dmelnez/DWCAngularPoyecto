import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LibrosService } from './servicios/libros.service';
import { AniadirComponent } from './aniadir/aniadir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CategoriasComponent, DetallesComponent, AniadirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biblioteca-davidMelendez';
  librosSeleccionados: any[] = [];

  constructor(private librosService: LibrosService) {}

  onCategoriaSeleccionada(categoria: string) {
    this.librosService.obtenerLibrosPorCategoria(categoria).subscribe((respuesta) => {
      this.librosSeleccionados = respuesta.map((libro: any) => ({
        titulo: libro.titulo,
        autor: libro.autor || 'Desconocido',
        paginas: libro.paginas || 'N/A',
        descripcion: libro.descripcion || 'Descripción no disponible',
        edicion: libro.edicion || 'Desconocida',
        ventas: libro.ventas || 0,
      }));
    });
  }
}