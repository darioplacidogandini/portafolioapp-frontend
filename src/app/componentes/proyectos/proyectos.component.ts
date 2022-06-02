import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  listaProyectos: Observable<Proyectos[]> | undefined;

  constructor(private datosProyectos:ProyectosService) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.listaProyectos = this.datosProyectos.listar(); 
  }

  public eliminar() {
    alert("Elemento eliminado");
  }

}
