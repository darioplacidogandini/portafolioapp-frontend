import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {

  constructor(private datosHabilidades:HabilidadesService,private route:ActivatedRoute,
    public editDialog:MatDialog) {}

  id: number = 0;
  habilidad: Habilidades = new Habilidades();

  ngOnInit(): void {}

  public saveChanges() {
    this.datosHabilidades.editar(this.id,this.habilidad).subscribe(data => {
      console.log(data)
    },error => console.log(error));
  }

}
