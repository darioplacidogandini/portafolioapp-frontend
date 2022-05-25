import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  listaEducacion: Observable<Educacion[]> | undefined;

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
  }

  cargarDatos() {
    this.listaEducacion = this.educacionService.listar();
  }

}
