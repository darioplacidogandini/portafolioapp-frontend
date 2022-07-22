import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  loginForm: FormGroup;

  invalidLogin = false;

  constructor(private formBuilder:FormBuilder,public loginDialog:MatDialog,
    private loginservice: AuthenticationService) {
      this.loginForm = this.formBuilder.group({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      })
    }

 ngOnInit() {}

 getErrorMessage() {
  if (this.loginForm.hasError('required')) {
    return 'Ingrese un mail valido';
  } 
    return this.loginForm.hasError('email') ? 'Correo invalido' : '';
  }

  checkLogin() {
    (this.loginservice.authenticate(this.loginForm.get('username')?.value,this.loginForm.get('password')?.value).subscribe(
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