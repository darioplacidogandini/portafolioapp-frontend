import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

id: number = 0;
educacion: Educacion = new Educacion();
  
    constructor(private datosEducacion:EducacionService,private rutaActiva:ActivatedRoute,private ruta:Router) {}
  
    ngOnInit(): void {
      this.id = this.rutaActiva.snapshot.params['id'];
      this.educacion = new Educacion();
      this.datosEducacion.buscar(this.id).subscribe(data => {
        this.educacion = data;
      }, error => console.log(error));
    }
  
    public editar(id: number) {
      this.datosEducacion.editar(id,this.educacion).subscribe(data => {
        console.log(data);
        this.ruta.navigate(['/portfolio']);
      }, error => console.log(error));
    }
}

