import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PensamientoDia } from '../models/pensamiento-dia.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PensamientoDiaService {

  private apiUrl = environment.urlPensamientoDia;

  constructor(private http: HttpClient) { }

  // Para todos los datos
  fetchData(): Observable<PensamientoDia[]> {
    return this.http.get<PensamientoDia[]>(this.apiUrl);
  }

}
