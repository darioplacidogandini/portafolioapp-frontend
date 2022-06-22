import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/proyectos';

  constructor(private http:HttpClient) {}

  listar(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.baseUrl}/listar`);
  }

  buscar(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(`${this.baseUrl}/buscar/${id}`);
  }

  agregar(proyectos: Proyectos): Observable<Object> {
    return this.http.post(`${this.baseUrl}/agregar`, proyectos);
  }

  editar(id: number,proyectos: Proyectos): Observable<any> {
    return this.http.put(`${this.baseUrl}/editar/${id}`, proyectos);
  }

  eliminar(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

}
