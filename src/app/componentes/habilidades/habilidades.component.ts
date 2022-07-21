import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades.model';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { AgregarHabilidadesComponent } from './agregar-habilidades/agregar-habilidades.component';
import { EditarHabilidadesComponent } from './editar-habilidades/editar-habilidades.component';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidades[] = [];

  constructor(private abilitiesService:HabilidadesService,private authService:AuthenticationService,
    public addDialog:MatDialog,public editDialog:MatDialog) {}

  ngOnInit(): void {
    this.listAbilities();
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public listAbilities() {
    this.abilitiesService.listar().subscribe(data => {
      this.habilidades = data;
    });
  }

  public openAddDialog() {
    this.addDialog.open(AgregarHabilidadesComponent);
  }

  public openEditDialog(id: number) {
    this.editDialog.open(EditarHabilidadesComponent);
  }

  public deleteAbility(id: number) {
    this.abilitiesService.eliminar(id).subscribe(data => {
      console.log(data);
      this.listAbilities();
    });
  }
  
}
