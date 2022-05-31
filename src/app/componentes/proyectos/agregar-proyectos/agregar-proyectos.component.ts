import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {

  proyecto: Proyectos = {
    nombre: '',
    descripcion: '',
    url: '',
    logo: ''
  }

  constructor(private proyectosService:ProyectosService, private ruta:Router) {}

  ngOnInit(): void {}

  agregarProyecto() {
    this.proyectosService.agregar(this.proyecto).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

}
