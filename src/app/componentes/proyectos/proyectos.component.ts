import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectos: Proyectos[] = [];

  constructor(private datosProyectos:ProyectosService,private ruta:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.datosProyectos.listar().subscribe(data => {
      this.proyectos = data;
    }); 
  }

  public editar(id: number) {
    this.ruta.navigate(['editar-proyectos', id]);
  }

  public eliminar(id: number) {
    this.datosProyectos.eliminar(id).subscribe(data => {
      console.log(data);
      this.listar();
    })
  }

}
