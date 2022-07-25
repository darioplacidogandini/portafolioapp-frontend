import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  id:number = 0;
  experience:Experiencia = new Experiencia();

  constructor(private experienciaService:ExperienciaService) {}

  ngOnInit(): void {
    this.id = this.experienciaService.id;
    this.experienciaService.search(this.id).subscribe(data => {
      this.experience = data;
    },error => console.log(error));
  }

  public saveChanges() {
    this.experienciaService.edit(this.id,this.experience).subscribe(data => {
      console.log(data);
    },error => console.log(error));
  }

}

