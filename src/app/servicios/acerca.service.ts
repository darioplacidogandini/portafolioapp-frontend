import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from '../model/acerca.model';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/acerca';
  id:number = 0;

  constructor(private http: HttpClient) {}

  list(): Observable<Acerca[]> {
    return this.http.get<Acerca[]>(`${this.baseUrl}/listar`);
  }

  search(id:number): Observable<Acerca> {
    return this.http.get<Acerca>(`${this.baseUrl}/buscar/${id}`);
  }

  edit(id:number,about: Acerca): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editar/${id}`,about);
  }

}
