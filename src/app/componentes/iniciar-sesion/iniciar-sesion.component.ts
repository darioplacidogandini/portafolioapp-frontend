import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);

  invalidLogin = false;

  constructor(private formBuilder:FormBuilder,public loginDialog:MatDialog,
    private loginservice: AuthenticationService) {}

 ngOnInit() {}

 getErrorMessage() {
  if (this.username.hasError('required')) {
    return 'Ingrese un mail valido';
  } 
    return this.password.hasError('email') ? 'Correo invalido' : '';
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username,this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    ));
  }

}