import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  id: number = 0;
  experiencia: Experiencia = new Experiencia();

  constructor(private experienciaService:ExperienciaService,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
     this.searchExperiencia();
  }

  public searchExperiencia() {
    this.experienciaService.buscar(this.id).subscribe(data => {
      this.experiencia = data;
    },error => console.log(error));
  }

  public saveChanges() {
    this.experienciaService.editar(this.id,this.experiencia).subscribe(data => {
      console.log(data);
    },error => console.log(error));
  }

}

