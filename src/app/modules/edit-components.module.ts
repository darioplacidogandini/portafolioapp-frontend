import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarAcercaComponent } from '../componentes/acerca-de/editar-acerca/editar-acerca.component';
import { EditarEducacionComponent } from '../componentes/educacion/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from '../componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarHabilidadesComponent } from '../componentes/habilidades/editar-habilidades/editar-habilidades.component';
import { EditarProyectosComponent } from '../componentes/proyectos/editar-proyectos/editar-proyectos.component';

@NgModule({
  declarations: [
    EditarAcercaComponent,
    EditarEducacionComponent,
    EditarExperienciaComponent,
    EditarHabilidadesComponent,
    EditarProyectosComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class EditComponentsModule { }
