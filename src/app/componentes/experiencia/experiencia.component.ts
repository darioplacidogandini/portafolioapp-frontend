import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  
  experience:Experiencia[] = [];
  id:number = 0;
  
  constructor(private experienceService:ExperienciaService,private authService:AuthenticationService,
    public dialog:MatDialog) {}

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.experienceService.list().subscribe(data => {
      this.experience = data;
    });
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AgregarExperienciaComponent,dialogConfig);
  }

  public openEditDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(EditarExperienciaComponent,dialogConfig);
  }

  public delete(id:number) {
    this.experienceService.eliminar(id).subscribe(data => {
      console.log(data);
      this.list();
    });
  }
}


