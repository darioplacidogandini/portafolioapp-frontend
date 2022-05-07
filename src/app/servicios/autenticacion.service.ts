import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AutenticacionService {
   url = 'http://localhost:8080';
   token: any;
   constructor(private http: HttpClient, private router:Router) {}

   login(email: string, password: string) {
      this.http.post(this.url + "/authenticate", {email: email, password: password})
      .subscribe((resp: any) => {
        this.router.navigate(['portfolio']);
        localStorage.setItem('auth_token', resp.token);
      })
   }

   logOut() {
     localStorage.removeItem('token');
     this.router.navigate(['portfolio']);
   }

   public get logIn(): boolean {
     return (localStorage.getItem('token') !== null);
   }
}
