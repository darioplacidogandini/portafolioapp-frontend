import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private authService:AuthenticationService,public loginDialog:MatDialog) {}

  ngOnInit(): void {}

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '800px';
    dialogConfig.width = '800px';
    this.loginDialog.open(IniciarSesionComponent,dialogConfig);
  }

  closeSession() {
    this.authService.logOut();
  }
}
