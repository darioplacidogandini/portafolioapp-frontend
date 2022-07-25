import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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

  education:Educacion[] = [];
  id:number = 0;

  constructor(private educationService:EducacionService,private authService:AuthenticationService,
  public dialog:MatDialog) {}

  ngOnInit(): void {
    this.list();
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public list() {
    this.educationService.list().subscribe(data => {
      this.education = data;
    });
  }

  public openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AgregarEducacionComponent,dialogConfig);
  }

  public openEditDialog(id:number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.educationService.id = id;
    this.dialog.open(EditarEducacionComponent,dialogConfig);
  }

  public delete(id:number) {
    this.educationService.delete(id).subscribe(data => {
      console.log(data);
      this.list();
    });
  }

}

