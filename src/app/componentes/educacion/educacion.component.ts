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

  listaEducacion: Observable<Educacion[]> | undefined;

  constructor(private datosEducacion:EducacionService,private ruta:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.listaEducacion = this.datosEducacion.listar();
  }

  public editar(id: number) {
    this.datosEducacion.editar(id,this.listaEducacion).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

  public eliminar(id: number) {
    this.datosEducacion.eliminar(id).subscribe();
    this.listar();
  }

}

