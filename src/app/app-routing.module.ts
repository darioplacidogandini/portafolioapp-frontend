import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaComponent } from './componentes/acerca-de/editar-acerca/editar-acerca.component';
import { AgregarEducacionComponent } from './componentes/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { AgregarExperienciaComponent } from './componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { AgregarHabilidadesComponent } from './componentes/habilidades/agregar-habilidades/agregar-habilidades.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AgregarProyectosComponent } from './componentes/proyectos/agregar-proyectos/agregar-proyectos.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos/editar-proyectos.component';

const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
  {path: 'iniciar-sesion',component:IniciarSesionComponent},
  {path: '',redirectTo: 'portfolio', pathMatch: 'full'},
  {path: 'editar-acerca',component:EditarAcercaComponent},
  {path: 'agregar-experiencia',component:AgregarExperienciaComponent},
  {path: 'editar-experiencia',component:EditarExperienciaComponent},
  {path: 'agregar-educacion',component:AgregarEducacionComponent},
  {path: 'editar-educacion',component:EditarEducacionComponent},
  {path: "agregar-habilidades",component:AgregarHabilidadesComponent},
  {path: 'editar-experiencia',component:EditarExperienciaComponent},
  {path: "agregar-proyectos",component:AgregarProyectosComponent},
  {path: 'editar-proyectos',component:EditarProyectosComponent},
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
