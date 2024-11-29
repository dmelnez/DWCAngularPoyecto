import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LibrosService {
  private apiUrl = 'http://localhost:3000/libros';

  constructor(private http: HttpClient) {}


  obtenerLibrosPorCategoria(categoria: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?categoria=${categoria}`);
  }
}