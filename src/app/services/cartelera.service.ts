import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cartelera } from '../models/cartelera.interface';

@Injectable({
  providedIn: 'root'
})
export class CarteleraService {

  private apiUrl = 'https://localhost:7127/api/Cartelera';

  constructor(private http: HttpClient) { }

  // Para todos los datos
  fetchData(): Observable<Cartelera[]> {
    return this.http.get<Cartelera[]>(this.apiUrl);
  }

  // Para datos por ID
  getCarteleraById(id: number): Observable<Cartelera> {
    return this.http.get<Cartelera>(`${this.apiUrl}/${id}`);
  }
}