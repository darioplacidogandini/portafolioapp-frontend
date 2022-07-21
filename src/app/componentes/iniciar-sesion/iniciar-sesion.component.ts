import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loginForm: FormGroup;

  invalidLogin = false;

  constructor(private formBuilder:FormBuilder,public loginDialog:MatDialog,
    private loginservice: AuthenticationService) {
      this.loginForm = this.formBuilder.group(
        {
          username:['',[Validators.required,Validators.email]],
          password:['',[Validators.required,Validators.minLength(8)]],
        }
      )
    }

 ngOnInit() {}

 getErrorMessage() {
  if (this.loginForm.hasError('required')) {
    return 'Ingrese un mail valido';
  } 
    return this.loginForm.hasError('email') ? 'Correo invalido' : '';
  }

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