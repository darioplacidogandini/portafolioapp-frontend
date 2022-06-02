import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  
  listaHabilidades: Observable<Habilidades[]> | undefined;

  constructor(private datosHabilidades:HabilidadesService) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.listaHabilidades = this.datosHabilidades.listar();
  }

  public eliminar() {
    alert("Elemento eliminado");
  }
  
}
