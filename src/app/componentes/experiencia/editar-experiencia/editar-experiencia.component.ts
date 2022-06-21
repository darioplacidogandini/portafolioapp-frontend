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

  id: number = 0;
  experiencia: Experiencia = new Experiencia();

  constructor(private datosExperiencia:ExperienciaService,private ruta:Router) {}

  ngOnInit(): void {}

    public editar(id: number) {
      this.datosExperiencia.editar(id,this.experiencia).subscribe();
      this.ruta.navigate(['/portfolio']);
    }

}
