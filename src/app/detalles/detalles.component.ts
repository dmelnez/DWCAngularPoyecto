import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
  template:  `
  <div class="detalles">
    <h3>Detalles de los Libros</h3>
    <div *ngIf="libros && libros.length > 0; else noData">
      <div class="card mb-3" *ngFor="let libro of libros" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img [src]="libro.imagen" class="img-fluid rounded-start" alt="Imagen de {{ libro.titulo }}" />
          </div>
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
    <ng-template #noData>
      <p>No hay libros disponibles para esta categoría.</p>
    </ng-template>
  </div>
`,
})
export class DetallesComponent {
  @Input() libros: any[] = [];
}
