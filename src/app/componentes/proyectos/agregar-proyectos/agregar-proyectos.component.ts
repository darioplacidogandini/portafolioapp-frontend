import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {

  proyecto: Proyectos = new Proyectos();

  constructor(private proyectosService:ProyectosService,
    public addDialog:MatDialog) {}

  ngOnInit(): void {}

  agregarProyecto() {
    this.proyectosService.agregar(this.proyecto).subscribe(data => {
      console.log(data);
    });
    this.addDialog.closeAll();
  }

}
