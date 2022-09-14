import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private baseUrl = '';
  id:number = 0;

  constructor(private http: HttpClient) {}

  list(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.baseUrl}/list`);
  }

  search(id:number): Observable<Education> {
    return this.http.get<Education>(`${this.baseUrl}/search/${id}`);
  }

  add(education:Education): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`,education);
  }

  edit(id:number,education:Education): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${id}`,education);
  }

  delete(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

}