import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
  template: `
    <div class="categorias">
      <h3>Categorías</h3>
      <ul class="list-group">
        <li
          *ngFor="let categoria of categorias"
          class="list-group-item list-group-item-action"
          (click)="seleccionarCategoria(categoria)"
        >
          {{ categoria }}
        </li>
      </ul>
    </div>
  `,
})
export class CategoriasComponent {
  @Output() categoriaSeleccionada = new EventEmitter<string>();

  categorias: string[] = ['Romance', 'Física', 'Teatro', 'Educativos', 'Negocios'];

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada.emit(categoria);
  }
}