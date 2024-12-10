import { Component, EventEmitter, Output } from '@angular/core'; // Importa los decoradores necesarios para definir el componente y el EventEmitter
import { CommonModule } from '@angular/common'; // Importa CommonModule, necesario para las directivas de Angular como *ngFor

@Component({
  selector: 'app-categorias', // Nombre del selector para usar este componente en la plantilla
  standalone: true, // Indica que el componente es independiente y no necesita ser parte de un módulo
  imports: [CommonModule], // Módulo necesario para el uso de directivas comunes
  templateUrl: './categorias.component.html', // Ruta al archivo de plantilla HTML (no usado ya que se usa un template inline)
  styleUrl: './categorias.component.css', // Ruta al archivo de estilos CSS (no usado ya que se usa un estilo inline)
  template: `
    <div class="categorias">
      <h3>Categorías</h3>
      
      <!-- Lista de categorías que se genera dinámicamente -->
      <ul class="list-group">
        <!-- *ngFor recorre el arreglo 'categorias' y crea un elemento 'li' por cada categoría -->
        <li *ngFor="let categoria of categorias" class="list-group-item list-group-item-action"
          (click)="seleccionarCategoria(categoria)" > <!-- Se vincula el clic con el método 'seleccionarCategoria' -->
          {{ categoria }} <!-- Muestra el nombre de la categoría -->
        </li>
      </ul>
    </div>
  `,
})
export class CategoriasComponent {
  // EventEmitter se utiliza para emitir eventos hacia el componente padre
  @Output() categoriaSeleccionada = new EventEmitter<string>();

  // Lista de categorías predefinidas
  categorias: string[] = ['Romance', 'Física', 'Teatro', 'Educativos', 'Negocios'];

  // Método para emitir la categoría seleccionada cuando el usuario hace clic
  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada.emit(categoria); // Emite el nombre de la categoría seleccionada
  }
}
