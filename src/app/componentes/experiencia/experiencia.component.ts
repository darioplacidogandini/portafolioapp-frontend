import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  listaExperiencia: Observable<Experiencia[]> | undefined;

  constructor(private datosExperiencia:ExperienciaService, private ruta:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.listaExperiencia = this.datosExperiencia.listar();
  }

  public editar(id: number) {
    this.datosExperiencia.editar(id,this.listaExperiencia).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

  public eliminar(id: number) {
    this.datosExperiencia.eliminar(id).subscribe();
    this.listar();
  }

}
