import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-agregar-habilidades',
  templateUrl: './agregar-habilidades.component.html',
  styleUrls: ['./agregar-habilidades.component.css']
})
export class AgregarHabilidadesComponent implements OnInit {

  habilidad: Habilidades = new Habilidades();

  constructor(private habilidadesService:HabilidadesService, 
    public addDialog:MatDialog) {}

  ngOnInit(): void {}

  public addAbility() {
    this.habilidadesService.agregar(this.habilidad).subscribe(data => {
      console.log(data);
    });
    this.addDialog.closeAll();
  }

}
