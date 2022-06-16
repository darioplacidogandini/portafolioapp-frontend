import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  experiencia: Experiencia = {
    id: 0,
    empresa: '',
    puesto: '',
    inicio: '',
    fin: '',
    logo: ''
  };

  constructor(private experienciaService:ExperienciaService, private ruta:Router) {}

  ngOnInit(): void {}

  agregarExperiencia() {
    this.experienciaService.agregar(this.experiencia).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

}
