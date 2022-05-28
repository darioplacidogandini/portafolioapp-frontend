import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-agregar-habilidades',
  templateUrl: './agregar-habilidades.component.html',
  styleUrls: ['./agregar-habilidades.component.css']
})
export class AgregarHabilidadesComponent implements OnInit {

  habilidad: Habilidades = {
    habilidad: '',
    porcentaje: ''
  }

  constructor(private habilidadesService:HabilidadesService, private ruta:Router) {}

  ngOnInit(): void {}

  agregarHabilidad() {
    this.habilidadesService.agregar(this.habilidad).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

}
