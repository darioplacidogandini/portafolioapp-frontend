import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/educacion';
  id:number = 0;

  constructor(private http: HttpClient) {}

  list(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.baseUrl}/listar`);
  }

  search(id:number): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.baseUrl}/buscar/${id}`);
  }

  add(education:Educacion): Observable<any> {
    return this.http.post(`${this.baseUrl}/agregar`,education);
  }

  edit(id:number,education:Educacion): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editar/${id}`,education);
  }

  delete(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

}