import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public loginDialog:MatDialog,
    private loginservice: AuthenticationService) {}

 ngOnInit() {}

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.loginDialog.closeAll();
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    ));
  }

}