import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { LibrosService } from '../servicios/libros.service';

@Component({
  selector: 'app-aniadir', // El selector que se usará para incluir este componente en otras plantillas
  standalone: true, // Indica que el componente es independiente y no necesita estar en un módulo
  imports: [CommonModule, FormsModule], // Importa los módulos necesarios: CommonModule y FormsModule
  templateUrl: './aniadir.component.html', // Ruta del archivo HTML que contiene la plantilla del componente
  styleUrls: ['./aniadir.component.css'], // Ruta del archivo CSS que contiene los estilos del componente
})
export class AniadirComponent {
  // Objeto que almacena los datos del nuevo libro que el usuario va a agregar
  nuevoLibro = {
    titulo: '', // Título del libro
    autor: '', // Autor del libro
    paginas: '', // Número de páginas
    descripcion: '', // Descripción del libro
    edicion: '', // Edición del libro
    ventas: 0, // Número de ventas
    categoria: '', // Categoría del libro
  };

  // Lista de categorías predefinidas para el campo "Categoría"
  categorias: string[] = [
    'Romance',  // Categoría de romance
    'Física',   // Categoría de física
    'Teatro',   // Categoría de teatro
    'Educativos', // Categoría educativa
    'Negocios', // Categoría de negocios
  ];

  // Constructor que inyecta el servicio 'LibrosService' para interactuar con la API
  constructor(private librosService: LibrosService) {}

  // Método que se llama cuando el formulario es enviado
  agregarLibro() {
    // Verifica que los campos "titulo" y "categoria" no estén vacíos
    if (this.nuevoLibro.titulo && this.nuevoLibro.categoria) {
      // Llama al servicio para agregar el libro a la base de datos o API
      this.librosService.agregarLibro(this.nuevoLibro).subscribe({
        next: () => {
          alert('Libro añadido con éxito'); // Muestra un mensaje de éxito
          this.resetFormulario(); // Resetea el formulario después de añadir el libro
        },
        error: (err) => {
          console.error('Error al añadir el libro:', err); // Muestra un error en consola si ocurre un problema
          alert('Ocurrió un error al añadir el libro'); // Muestra un mensaje de error
        },
      });
    } else {
      // Si los campos obligatorios no están completos, muestra un mensaje de alerta
      alert('Por favor, completa los campos obligatorios');
    }
  }

  // Método que resetea los valores del formulario después de agregar un libro
  resetFormulario() {
    // Establece los valores del objeto 'nuevoLibro' a los valores iniciales (vacíos o por defecto)
    this.nuevoLibro = {
      titulo: '',
      autor: '',
      paginas: '',
      descripcion: '',
      edicion: '',
      ventas: 0,
      categoria: '',
    };
  }
}
