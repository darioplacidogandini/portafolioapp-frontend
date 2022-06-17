import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  listaProyectos: Observable<Proyectos[]> | undefined;

  proyecto: Proyectos = {
    id: 0,
    nombre: '',
    descripcion: '',
    url: '',
    logo: ''
  }

  constructor(private datosProyectos:ProyectosService,private ruta:Router) {}

  ngOnInit(): void {}

  public editar(id: number) {
    this.datosProyectos.editar(id,this.listaProyectos).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

}
