import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-detalles', // Nombre del selector para utilizar este componente en la plantilla
  standalone: true, // Indica que el componente es independiente y no necesita ser parte de un módulo
  imports: [CommonModule], // Módulo necesario para el uso de directivas comunes
  templateUrl: './detalles.component.html', // Ruta al archivo de plantilla HTML (no usado ya que se usa un template inline)
  styleUrl: './detalles.component.css', // Ruta al archivo de estilos CSS (no usado ya que se usa un estilo inline)
  template:  `
  <div class="detalles">
    <h3>Detalles de los Libros</h3>

    <!-- Verifica si la lista de libros tiene datos -->
    <div *ngIf="libros && libros.length > 0; else noData">
      
      <!-- Muestra un card para cada libro disponible -->
      <div class="card mb-3" *ngFor="let libro of libros" style="max-width: 540px;">
        <div class="row g-0">
          

          <!-- Columna para los detalles del libro -->
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ libro.titulo }}</h5>
              <p class="card-text">Autor: {{ libro.autor }}</p>
              <p class="card-text">Páginas: {{ libro.paginas }}</p>
              <p class="card-text">Descripción: {{ libro.descripcion }}</p>
              <p class="card-text">Edición: {{ libro.edicion }}</p>
              <p class="card-text">Ventas: {{ libro.ventas | number }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mensaje que se muestra si no hay libros -->
    <ng-template #noData>
      <p>No hay libros disponibles para esta categoría.</p>
    </ng-template>
  </div>
`,
})
export class DetallesComponent {
  @Input() libros: any[] = []; // Propiedad de entrada para recibir la lista de libros desde el componente padre
}
