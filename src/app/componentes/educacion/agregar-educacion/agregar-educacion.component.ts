import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  educacion: Educacion = {
    id: 0,
    titulo: '',
    institucion: '',
    fecha: '',
    duracion: 0
  };

  constructor(private educacionService:EducacionService, private ruta:Router) {}

  ngOnInit(): void {}

  agregarEducacion() {
    this.educacionService.agregar(this.educacion).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

}
