import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { EducacionComponent } from '../educacion.component';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  id:number = 0;
  education:Educacion = new Educacion();

    constructor(private educationService:EducacionService) {
    }
  
    ngOnInit(): void {
      this.id = this.educationService.id;
      this.educationService.search(this.id).subscribe(data => {
        this.education = data;
      }, error => console.log(error));  
    }

    public saveChanges() {
      this.educationService.edit(this.id,this.education).subscribe(data => {
        console.log(data);
      }, error => console.log(error));
    }
}

