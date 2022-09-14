import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private baseUrl = '';
  id:number = 1;

  constructor(private http: HttpClient) {}

  list(): Observable<About[]> {
    return this.http.get<About[]>(`${this.baseUrl}/list`);
  }

  search(id:number): Observable<About> {
    return this.http.get<About>(`${this.baseUrl}/search/${id}`);
  }

  edit(id:number,about:About): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${id}`,about);
  }

}
