import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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

  ability: Habilidades[] = [];

  constructor(private abilitiesService:HabilidadesService,private authService:AuthenticationService,
    public dialog:MatDialog) {}

  ngOnInit(): void {
    this.listAbilities();
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public listAbilities() {
    this.abilitiesService.list().subscribe(data => {
      this.ability = data;
    });
  }

  public addAbility() {
    this.dialog.open(AgregarHabilidadesComponent);
  }

  public editAbility(id:number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(EditarHabilidadesComponent,dialogConfig);
  }

  public deleteAbility(id:number) {
    this.abilitiesService.delete(id).subscribe(data => {
      console.log(data);
    });
  }
}
