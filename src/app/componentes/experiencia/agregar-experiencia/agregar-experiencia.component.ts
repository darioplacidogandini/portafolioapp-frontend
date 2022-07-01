import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia();

  constructor(private experienciaService:ExperienciaService, public addDialog:MatDialog) {}

  ngOnInit(): void {}

  agregar() {
    this.experienciaService.agregar(this.experiencia).subscribe(data => {
      console.log(data);
    });
    this.addDialog.closeAll();
  }

}
