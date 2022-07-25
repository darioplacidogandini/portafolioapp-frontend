import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/proyectos';
  id:number = 0;

  constructor(private http:HttpClient) {}

  list(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.baseUrl}/listar`);
  }

  search(id:number): Observable<Proyectos> {
    return this.http.get<Proyectos>(`${this.baseUrl}/buscar/${id}`);
  }

  add(projects:Proyectos): Observable<Object> {
    return this.http.post(`${this.baseUrl}/agregar`,projects);
  }

  edit(id:number,projects:Proyectos): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editar/${id}`,projects);
  }

  delete(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

}
