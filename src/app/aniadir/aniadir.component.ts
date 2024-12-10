import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../servicios/libros.service';

@Component({
  selector: 'app-aniadir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aniadir.component.html',
  styleUrls: ['./aniadir.component.css'],
})
export class AniadirComponent {
  nuevoLibro = {
    titulo: '',
    autor: '',
    paginas: '',
    descripcion: '',
    edicion: '',
    ventas: 0,
    imagen: '',
    categoria: '',
  };

  // Lista de categorías predefinidas
  categorias: string[] = [
    'Romance ',
    'Física',
    'Teatro',
    'Educativos',
    'Negocios',
  ];

  constructor(private librosService: LibrosService) {}

  agregarLibro() {
    if (this.nuevoLibro.titulo && this.nuevoLibro.categoria) {
      this.librosService.agregarLibro(this.nuevoLibro).subscribe({
        next: () => {
          alert('Libro añadido con éxito');
          this.resetFormulario();
        },
        error: (err) => {
          console.error('Error al añadir el libro:', err);
          alert('Ocurrió un error al añadir el libro');
        },
      });
    } else {
      alert('Por favor, completa los campos obligatorios');
    }
  }

  resetFormulario() {
    this.nuevoLibro = {
      titulo: '',
      autor: '',
      paginas: '',
      descripcion: '',
      edicion: '',
      ventas: 0,
      imagen: '',
      categoria: '',
    };
  }
}
