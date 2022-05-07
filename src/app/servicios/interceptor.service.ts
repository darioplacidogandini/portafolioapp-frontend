import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token: any = sessionStorage.getItem('token');
    if (sessionStorage.getItem('username') && token) {
      req = req.clone({
        setHeaders: {
          Authorization: token
        }
      })
    }

    return next.handle(req);

  }
}