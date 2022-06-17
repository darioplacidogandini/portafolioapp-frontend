import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {

  listaHabilidades: Observable<Habilidades[]> | undefined;

  habilidad: Habilidades = {
    id: 0,
    habilidad: '',
    porcentaje: ''
  }

  constructor(private datosHabilidades:HabilidadesService,private ruta:Router) {}

  ngOnInit(): void {}

  public editar(id: number) {
    this.datosHabilidades.editar(id,this.habilidad).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

}
