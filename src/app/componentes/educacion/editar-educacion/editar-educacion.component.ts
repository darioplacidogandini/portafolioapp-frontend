import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { EducacionComponent } from '../educacion.component';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  id: number = 0;
  educacion: Educacion = new Educacion();

    constructor(private educacionService:EducacionService,private route:ActivatedRoute,
      public editarDialog:MatDialog, private educacionComponent:EducacionComponent) {
    }
  
    ngOnInit(): void {
      this.educacion = new Educacion();
      this.searchExperiencia();
    }

    public searchExperiencia() {
      this.educacionService.buscar(this.educacionComponent.id).subscribe(data => {
        this.educacion = data;
      }, error => console.log(error));
    }
  
    public saveChanges() {
      this.educacionService.editar(this.id,this.educacion).subscribe(data => {
        console.log(data);
      }, error => console.log(error));
    }
}

