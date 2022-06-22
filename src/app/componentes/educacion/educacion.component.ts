import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private datosEducacion:EducacionService,private ruta:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.datosEducacion.listar().subscribe(data => {
      this.educacion = data;
    });
  }

  public editar(id: number) {
    this.ruta.navigate(['editar-educacion', id]);
  }

  public eliminar(id: number) {
    this.datosEducacion.eliminar(id).subscribe(data => {
      console.log(data);
      this.listar();
    });
  }

}

