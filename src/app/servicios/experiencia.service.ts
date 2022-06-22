import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/experiencia';

  constructor(private http: HttpClient) {}

  listar(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.baseUrl}/listar`);
  }

  buscar(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.baseUrl}/buscar/${id}`);
  }

  agregar(experiencia: Experiencia): Observable<Object> {
    return this.http.post(`${this.baseUrl}/agregar`, experiencia);
  }

  editar(id: number,experiencia: Experiencia): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editar/${id}`, experiencia);
  }

  eliminar(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

}
