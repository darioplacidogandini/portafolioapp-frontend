import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  educacion: Educacion = {
    id: 0,
    titulo: '',
    institucion: '',
    fecha: '',
    duracion: 0
  };
  
    constructor(private datosEducacion:EducacionService, private ruta:Router) {}
  
    ngOnInit(): void {}
  
    public editar(id: number) {
      this.datosEducacion.editar(id,this.listaEducacion).subscribe();
      this.ruta.navigate(['/portfolio']);
    }
}

