import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,
    private authService:AuthenticationService,public loginDialog:MatDialog) {}

  ngOnInit(): void {}

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  openLoginDialog(): void {
    this.loginDialog.open(IniciarSesionComponent);
  }

  closeSession() {
    this.authenticationService.logOut();
  }
}
