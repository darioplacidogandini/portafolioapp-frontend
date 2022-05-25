import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { AgregarEducacionComponent } from './componentes/educacion/agregar-educacion/agregar-educacion.component';
import { EditarAcercaComponent } from './componentes/acerca-de/editar-acerca/editar-acerca.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { AgregarExperienciaComponent } from './componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarHabilidadesComponent } from './componentes/habilidades/editar-habilidades/editar-habilidades.component';
import { AgregarHabilidadesComponent } from './componentes/habilidades/agregar-habilidades/agregar-habilidades.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos/editar-proyectos.component';
import { AgregarProyectosComponent } from './componentes/proyectos/agregar-proyectos/agregar-proyectos.component';

const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
  {path: 'iniciar-sesion',component:IniciarSesionComponent},
  {path: '',redirectTo: 'portfolio', pathMatch: 'full'},
  {path: 'editar-acerca',component:EditarAcercaComponent},
  {path: 'editar-experiencia',component:EditarExperienciaComponent},
  {path: 'agregar-experiencia',component:AgregarExperienciaComponent},
  {path: 'editar-educacion',component:EditarEducacionComponent},
  {path: 'agregar-educacion',component:AgregarEducacionComponent},
  {path: 'editar-habilidades',component:EditarHabilidadesComponent},
  {path: "agregar-habilidades",component:AgregarHabilidadesComponent},
  {path: "editar-proyectos",component:EditarProyectosComponent},
  {path: "agregar-proyectos",component:AgregarProyectosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
