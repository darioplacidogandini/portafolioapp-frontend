import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos.model';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { EditarProyectosComponent } from './editar-proyectos/editar-proyectos.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgregarProyectosComponent } from './agregar-proyectos/agregar-proyectos.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectos:Proyectos[] = [];

  constructor(private proyectsService:ProyectosService,private authService:AuthenticationService,
      public dialog:MatDialog) {}

  ngOnInit(): void {
    this.list();
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public list() {
    this.proyectsService.list().subscribe(data => {
      this.proyectos = data;
    }); 
  }

  public openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AgregarProyectosComponent);
  }

  public openEditDialog(id:number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.proyectsService.id = id;
    this.dialog.open(EditarProyectosComponent);
  }

  public delete(id:number) {
    this.proyectsService.delete(id).subscribe(data => {
      console.log(data);
      this.list();
    })
  }

}
