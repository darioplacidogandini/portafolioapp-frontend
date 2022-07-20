import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  editedExperiencia: Experiencia = new Experiencia();
  id: number = 0;

  constructor(private datosExperiencia:ExperienciaService,private authService:AuthenticationService,
    public dialog:MatDialog) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.datosExperiencia.listar().subscribe(data => {
      this.experiencia = data;
    });
  }

  public searchExperiencia() {
    this.datosExperiencia.buscar(this.id).subscribe(data => {
      this.editedExperiencia = data;
    },error => console.log(error));
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public openAddDialog() {
    this.dialog.open(AgregarExperienciaComponent)
  }

  public openEditDialog(id: number) {
    this.id = id;
    this.searchExperiencia();
    this.dialog.open(EditarExperienciaComponent);
  }

  public saveChanges() {
    this.datosExperiencia.editar(this.id,this.editedExperiencia).subscribe(data => {
      console.log(data);
    },error => console.log(error));
  }

  public eliminar(id: number) {
    this.datosExperiencia.eliminar(id).subscribe(data => {
      console.log(data);
      this.listar();
    });
  }
}


