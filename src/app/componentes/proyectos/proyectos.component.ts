import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos.model';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { EditarProyectosComponent } from './editar-proyectos/editar-proyectos.component';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProyectosComponent } from './agregar-proyectos/agregar-proyectos.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectos: Proyectos[] = [];

  constructor(private datosProyectos:ProyectosService,private authService:AuthenticationService,
      public addDialog:MatDialog,public editDialog:MatDialog) {}

  ngOnInit(): void {
    this.listar();
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public listar() {
    this.datosProyectos.listar().subscribe(data => {
      this.proyectos = data;
    }); 
  }

  public openAddDialog() {
    this.addDialog.open(AgregarProyectosComponent);
  }

  public openEditDialog(id: number) {
    this.editDialog.open(EditarProyectosComponent);
  }

  public eliminar(id: number) {
    this.datosProyectos.eliminar(id).subscribe(data => {
      console.log(data);
      this.listar();
    })
  }

}
