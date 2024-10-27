import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cartelera } from '../models/cartelera.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarteleraService {

  private apiUrl = environment.urlCartelera;

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