import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/habilidades';

  constructor(private http:HttpClient) {}

  listar(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(`${this.baseUrl}/listar`);
  } 

  buscar(id: number): Observable<Habilidades> {
    return this.http.get<Habilidades>(`${this.baseUrl}/buscar/${id}`);
  }

  agregar(habilidades: Habilidades): Observable<Object> {
    return this.http.post(`${this.baseUrl}/agregar`, habilidades);
  }

  editar(id: number,habilidades: Habilidades): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editar/${id}`, habilidades);
  }

  eliminar(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

}
