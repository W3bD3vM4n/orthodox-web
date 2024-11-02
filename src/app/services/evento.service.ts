import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private apiUrl = environment.baseUrl+'/api/Evento';

  constructor(private http: HttpClient) { }

  // Para todos los datos
  fetchData(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

}
