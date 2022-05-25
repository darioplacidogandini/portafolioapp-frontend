import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseUrl = 'http://localhost:8080/api/proyectos';

  constructor(private http:HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }

  agregar(proyectos: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/agregar`, proyectos);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.baseUrl}/{id}`, {responseType: 'text'});
  }

}
