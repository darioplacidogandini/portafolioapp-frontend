import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/experiencia';
  id:number = 0;

  constructor(private http: HttpClient) {}

  list(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.baseUrl}/listar`);
  }

  search(id:number): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.baseUrl}/buscar/${id}`);
  }

  add(experience:Experiencia): Observable<Object> {
    return this.http.post(`${this.baseUrl}/agregar`,experience);
  }

  edit(id:number,experience:Experiencia): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editar/${id}`,experience);
  }

  eliminar(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

}
