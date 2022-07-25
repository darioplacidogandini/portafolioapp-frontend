import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hability } from '../model/hability.model';

@Injectable({
  providedIn: 'root'
})
export class HabilitiesService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/habilities';
  id:number = 0;

  constructor(private http:HttpClient) {}

  list(): Observable<Hability[]> {
    return this.http.get<Hability[]>(`${this.baseUrl}/list`);
  } 

  search(id:number): Observable<Hability> {
    return this.http.get<Hability>(`${this.baseUrl}/search/${id}`);
  }

  add(ability:Hability): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`,ability);
  }

  edit(id:number,ability:Hability): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${id}`,ability);
  }

  delete(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

}
