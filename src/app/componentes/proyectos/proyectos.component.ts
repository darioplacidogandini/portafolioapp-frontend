import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private datosProyectos:ProyectosService,private ruta:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.listaProyectos = this.datosProyectos.listar(); 
  }

  public editar(id: number) {
    this.datosProyectos.editar(id,this.listaProyectos).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

  public eliminar(id: number) {
    this.datosProyectos.eliminar(id).subscribe;
  }

}
