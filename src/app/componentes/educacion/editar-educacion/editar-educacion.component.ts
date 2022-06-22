import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

educacion: Educacion = new Educacion();
  
    constructor(private datosEducacion:EducacionService, private ruta:Router) {}
  
    ngOnInit(): void {}
  
    public editar(id: number) {
      this.datosEducacion.editar(id,this.educacion).subscribe(data => {
        this.ruta.navigate(['/portfolio']);
      });
    }
}

