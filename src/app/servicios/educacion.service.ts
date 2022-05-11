import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

const baseUrl = 'http://localhost:8080/api/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Educacion): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: string, data: Educacion): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  publishUnpublish(id: string, data: Educacion): Observable<any> {
    return this.http.put(`${baseUrl}/${id}/publish`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByTitle(titulo: string): Observable<any> {
    return this.http.get(`${baseUrl}?title=${titulo}`);
  }
}