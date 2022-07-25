import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/experience';
  id:number = 0;

  constructor(private http: HttpClient) {}

  list(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}/list`);
  }

  search(id:number): Observable<Experience> {
    return this.http.get<Experience>(`${this.baseUrl}/search/${id}`);
  }

  add(experience:Experience): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`,experience);
  }

  edit(id:number,experience:Experience): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${id}`,experience);
  }

  delete(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

}
