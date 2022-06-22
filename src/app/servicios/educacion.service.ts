import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/educacion';

  constructor(private http: HttpClient) {}

  listar(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.baseUrl}/listar`);
  }

  buscar(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.baseUrl}/buscar/${id}`);
  }

  agregar(educacion: Educacion): Observable<any> {
    return this.http.post(`${this.baseUrl}/agregar`, educacion);
  }

  editar(id: number,educacion: Educacion): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editar/${id}`, educacion);
  }

  eliminar(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

}