import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  headerList:any;
  constructor(private authenticationService:AuthenticationService) {}

  ngOnInit(): void {}

  cerrarSesion() {
    this.authenticationService.logOut();
  }
    
}
