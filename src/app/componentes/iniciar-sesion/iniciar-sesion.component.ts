import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService) {}

 ngOnInit() {}

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    ));
  }

}