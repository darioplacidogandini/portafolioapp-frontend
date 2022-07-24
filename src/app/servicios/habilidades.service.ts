import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/habilidades';
  id: number = 0;

  constructor(private http:HttpClient) {}

  list(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(`${this.baseUrl}/listar`);
  } 

  search(id:number): Observable<Habilidades> {
    return this.http.get<Habilidades>(`${this.baseUrl}/buscar/${id}`);
  }

  add(ability:Habilidades): Observable<Object> {
    return this.http.post(`${this.baseUrl}/agregar`,ability);
  }

  edit(id:number,ability:Habilidades): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editar/${id}`,ability);
  }

  delete(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

}
