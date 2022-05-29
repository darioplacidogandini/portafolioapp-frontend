import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  private baseUrl = 'https://bzw3zao6uyhzhc61l6vh-mysql.services.clever-cloud.com/api/acerca';

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }

  editar(acerca: object): Observable<any> {
    return this.http.post(`${this.baseUrl}/editar`, acerca);
  }

}
