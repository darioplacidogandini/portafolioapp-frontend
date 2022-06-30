import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEducacionComponent } from '../componentes/educacion/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from '../componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { AgregarProyectosComponent } from '../componentes/proyectos/agregar-proyectos/agregar-proyectos.component';
import { AgregarHabilidadesComponent } from '../componentes/habilidades/agregar-habilidades/agregar-habilidades.component';

@NgModule({
  declarations: [
    AgregarEducacionComponent,
    AgregarExperienciaComponent,
    AgregarProyectosComponent,
    AgregarHabilidadesComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class AddComponentsModule { }
