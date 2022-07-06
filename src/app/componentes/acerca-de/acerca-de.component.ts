import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca.model';
import { AcercaService } from 'src/app/servicios/acerca.service';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { EditarAcercaComponent } from './editar-acerca/editar-acerca.component';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acerca: Acerca[] = [];

  constructor(private datosAcerca:AcercaService,private authService:AuthenticationService,
    private router:Router,public editDialog:MatDialog) {}

  ngOnInit(): void {
    this.listar();
    }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }
    
  public listar() {
    this.datosAcerca.listar().subscribe(data => {
      this.acerca = data;
    });
  }

  public openEditDialog(id: number) {
    this.router.navigate(['/editar-acerca', id]);
  }
  
}
