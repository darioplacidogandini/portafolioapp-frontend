import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  constructor(private projectsService:ProyectosService) {}

  id:number = 0;
  project:Proyectos = new Proyectos();

  ngOnInit(): void {
    this.id = this.projectsService.id;
    this.projectsService.search(this.id).subscribe(data => {
      this.project = data;
    },error => console.log(error));
  }

  public saveChanges() {
    this.projectsService.edit(this.id,this.project).subscribe(data => {
      console.log(data);
    },error => console.log(error));
  }

}
