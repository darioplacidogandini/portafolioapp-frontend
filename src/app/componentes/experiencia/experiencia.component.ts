import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { AgregarExperienciaComponent } from './agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './editar-experiencia/editar-experiencia.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experiencia: Experiencia[] = [];

  constructor(private datosExperiencia:ExperienciaService,private authService:AuthenticationService,
    public addDiaglog:MatDialog,public editDialog:MatDialog) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.datosExperiencia.listar().subscribe(data => {
      this.experiencia = data;
    });
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public openAddDialog() {
    this.addDiaglog.open(AgregarExperienciaComponent)
  }

  public openEditDialog(id: number) {
    this.editDialog.open(EditarExperienciaComponent);
  }

  public eliminar(id: number) {
    this.datosExperiencia.eliminar(id).subscribe(data => {
      console.log(data);
      this.listar();
    });
  }

}
