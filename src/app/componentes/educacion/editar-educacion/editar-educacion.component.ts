import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { EducacionComponent } from '../educacion.component';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

educacion: Educacion = new Educacion();
id: number = 0;
  
    constructor(private datosEducacion:EducacionService,
    private educacionId:EducacionComponent,public editarDialog:MatDialog) {
      this.id = educacionId.id;
    }
  
    ngOnInit(): void {
      
      this.educacion = new Educacion();
      this.datosEducacion.buscar(this.id).subscribe(data => {
        this.educacion = data;
      }, error => console.log(error));
    }
  
    public guardarCambios() {
      this.datosEducacion.editar(this.id,this.educacion).subscribe(data => {
        console.log(data);
      }, error => console.log(error));
      this.editarDialog.closeAll();
    }
}

