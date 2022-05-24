import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  listaEducacion: Observable<Educacion[]> | undefined;

  educacion: Educacion = new Educacion();

  constructor(private datosEducacion:EducacionService) { }

  ngOnInit(): void { 
    this.obtenerDatos();
  }

   public obtenerDatos() {
    this.listaEducacion = this.datosEducacion.listar();
   }

}

