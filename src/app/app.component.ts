import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa el CommonModule, necesario para usar directivas comunes como ngIf, ngFor, etc.
import { CategoriasComponent } from './categorias/categorias.component'; // Componente para mostrar las categorías
import { DetallesComponent } from './detalles/detalles.component'; // Componente para mostrar detalles de los libros
import { AniadirComponent } from './aniadir/aniadir.component'; // Componente para agregar un nuevo libro
import { LibrosService } from './servicios/libros.service'; // Servicio para interactuar con la API de libros
import { HttpClientModule } from '@angular/common/http'; // Módulo para hacer peticiones HTTP a la API

@Component({
  selector: 'app-root', // Nombre del selector para utilizar este componente en las plantillas
  standalone: true, // Indica que el componente es independiente y no necesita ser parte de un módulo
  imports: [
    CommonModule, // Módulo común de Angular
    HttpClientModule, // Módulo para hacer solicitudes HTTP
    RouterOutlet, // Módulo necesario para el manejo de rutas
    CategoriasComponent, // Componente de categorías
    DetallesComponent, // Componente para mostrar detalles de los libros
    AniadirComponent, // Componente para agregar libros
  ],
  templateUrl: './app.component.html', // Ruta al archivo de la plantilla HTML
  styleUrls: ['./app.component.css'], // Ruta al archivo de estilo CSS
})
export class AppComponent {
  title = 'biblioteca-davidMelendez'; // Título de la aplicación
  librosSeleccionados: any[] = []; // Arreglo donde se almacenan los libros seleccionados para mostrar
  mostrarFormulario = false; // Control de visibilidad del formulario de añadir libro

  // Constructor donde se inyecta el servicio LibrosService
  constructor(private librosService: LibrosService) {}

  // Método para manejar la selección de una categoría
  onCategoriaSeleccionada(categoria: string) {
    // Llama al servicio para obtener los libros de la categoría seleccionada
    this.librosService.obtenerLibrosPorCategoria(categoria).subscribe((respuesta) => {
      // Al recibir la respuesta, mapea los libros a un formato adecuado y los guarda en librosSeleccionados
      this.librosSeleccionados = respuesta.map((libro: any) => ({
        titulo: libro.titulo,
        autor: libro.autor || 'Desconocido', // Si no hay autor, se asigna 'Desconocido'
        paginas: libro.paginas || 'N/A', // Si no hay páginas, se asigna 'N/A'
        descripcion: libro.descripcion || 'Descripción no disponible', // Si no hay descripción, se asigna un texto predeterminado
        edicion: libro.edicion || 'Desconocida', // Si no hay edición, se asigna 'Desconocida'
        ventas: libro.ventas || 0, // Si no hay ventas, se asigna 0
      }));
    });
  }

  // Método para alternar la visibilidad del formulario
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario; // Cambia el valor de mostrarFormulario para mostrar u ocultar el formulario
  }
}
