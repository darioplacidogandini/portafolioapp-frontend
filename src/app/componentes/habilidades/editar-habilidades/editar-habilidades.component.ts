import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {

  constructor(private datosHabilidades:HabilidadesService,private router:ActivatedRoute,private ruta:Router) {}

  habilidad = new Habilidades();
  id = this.habilidad.id;

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.datosHabilidades.buscar(this.id);
  }

  public editar(id: number) {
    this.datosHabilidades.editar(id,this.habilidad);
    this.ruta.navigate(['/portfolio']);
  }

}
