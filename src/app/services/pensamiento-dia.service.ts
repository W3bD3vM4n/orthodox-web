import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PensamientoDia } from '../models/pensamiento-dia.interface';

@Injectable({
  providedIn: 'root'
})
export class PensamientoDiaService {

  private apiUrl = 'https://localhost:7127/api/PensamientoDia';

  constructor(private http: HttpClient) { }

  // Para todos los datos
  fetchData(): Observable<PensamientoDia[]> {
    return this.http.get<PensamientoDia[]>(this.apiUrl);
  }

}
