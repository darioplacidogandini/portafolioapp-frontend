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

  constructor(private datosExperiencia:ExperienciaService,private rutaActual:ActivatedRoute,
    public editDialog:MatDialog) {}

  ngOnInit(): void {
    this.id = this.rutaActual.snapshot.params['id'];
    this.experiencia = new Experiencia();
    this.datosExperiencia.buscar(this.id).subscribe(data => {
      this.experiencia = data;
    },error => console.log(error));
  }

}

