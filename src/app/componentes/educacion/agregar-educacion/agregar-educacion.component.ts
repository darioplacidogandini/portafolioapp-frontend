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

  educacion: Educacion = new Educacion();

  constructor(private educacionService:EducacionService, private ruta:Router) {}

  ngOnInit(): void {}

  agregar() {
    this.educacionService.agregar(this.educacion).subscribe(data => {
      console.log(data);
      this.ruta.navigate(['/portfolio']);
    });
  }

}
