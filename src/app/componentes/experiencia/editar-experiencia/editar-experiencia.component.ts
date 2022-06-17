import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  listaExperiencia: Observable<Experiencia[]> | undefined;

  experiencia: Experiencia = {
    id: 0,
    empresa: '',
    puesto: '',
    inicio: '',
    fin: '',
    logo: ''
  };

  constructor(private datosExperiencia:ExperienciaService,private ruta:Router) {}

  ngOnInit(): void {}

    public editar(id: number) {
      this.datosExperiencia.editar(id,this.listaExperiencia).subscribe();
      this.ruta.navigate(['/portfolio']);
    }

}
