import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/educacion.model';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { AgregarEducacionComponent } from './agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];
  
  constructor(private datosEducacion:EducacionService,private authService:AuthenticationService,
  public addDialog:MatDialog,public editDialog:MatDialog) {}

  ngOnInit(): void {
    this.listar();
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public listar() {
    this.datosEducacion.listar().subscribe(data => {
      this.educacion = data;
    });
  }

  public openAddDialog() {
    this.addDialog.open(AgregarEducacionComponent);
  }

  public openEditDialog() {
    this.editDialog.open(EditarEducacionComponent);
  }

  public eliminar(id: number) {
    this.datosEducacion.eliminar(id).subscribe(data => {
      console.log(data);
      this.listar();
    });
  }

}

