import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidades[] = [];

  constructor(private datosHabilidades:HabilidadesService,private ruta:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.datosHabilidades.listar().subscribe(data => {
      this.habilidades = data;
    });
  }

  public editar(id: number) {
    this.ruta.navigate(['editar-habilidades', id]);
  }

  public eliminar(id: number) {
    this.datosHabilidades.eliminar(id).subscribe(data => {
      console.log(data);
      this.listar();
    });
  }
  
}
