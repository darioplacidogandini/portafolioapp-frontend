import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {

  project:Proyectos = new Proyectos();

  constructor(private proyectsService:ProyectosService) {}

  ngOnInit(): void {}

  add() {
    this.proyectsService.add(this.project).subscribe(data => {
      console.log(data);
    });
  }

}
