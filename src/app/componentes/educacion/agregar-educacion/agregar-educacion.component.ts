import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  education:Educacion = new Educacion();

  constructor(private educationService:EducacionService) {}

  ngOnInit(): void {}

  public add() {
    this.educationService.add(this.education).subscribe(data => {
      console.log(data);
      this.educationService.list();
    });
  }

}
