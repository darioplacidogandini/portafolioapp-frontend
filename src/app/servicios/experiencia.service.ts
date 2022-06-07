import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/experiencia';

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }

  agregar(experiencia: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/agregar`, experiencia);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

}
