import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  constructor(private datosProyectos:ProyectosService,private router:ActivatedRoute,private ruta:Router) {}

  proyecto = new Proyectos();
  id = this.proyecto.id;

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.datosProyectos.buscar(this.id);
  }

  public editar(id: number) {
    this.datosProyectos.editar(id,this.proyecto).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

}
