import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from '../model/acerca.model';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/acerca';

  constructor(private http: HttpClient) {}

  listar(): Observable<Acerca[]> {
    return this.http.get<Acerca[]>(`${this.baseUrl}/listar`);
  }

  buscar(id: number): Observable<Acerca> {
    return this.http.get<Acerca>(`${this.baseUrl}/buscar/${id}`);
  }

  editar(id: number,acerca: Acerca): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editar/${id}`, acerca);
  }

}
