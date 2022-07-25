import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseUrl = 'https://dariogandini-portfolio-backend.herokuapp.com/api/projects';
  id:number = 0;

  constructor(private http:HttpClient) {}

  list(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/list`);
  }

  search(id:number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/search/${id}`);
  }

  add(projects:Project): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`,projects);
  }

  edit(id:number,projects:Project): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${id}`,projects);
  } 

  delete(id:number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

}
