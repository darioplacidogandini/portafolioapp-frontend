import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaComponent } from './componentes/acerca-de/editar-acerca/editar-acerca.component';
import { AgregarEducacionComponent } from './componentes/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { AgregarExperienciaComponent } from './componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { AgregarHabilidadesComponent } from './componentes/habilidades/agregar-habilidades/agregar-habilidades.component';
import { EditarHabilidadesComponent } from './componentes/habilidades/editar-habilidades/editar-habilidades.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AgregarProyectosComponent } from './componentes/proyectos/agregar-proyectos/agregar-proyectos.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos/editar-proyectos.component';
import { AuthGuard } from './servicios/auth.guard';

const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
  {path: 'iniciar-sesion',component:IniciarSesionComponent},
  {path: '',redirectTo: 'portfolio', pathMatch: 'full'},
  {path: 'editar-acerca/:id',component:EditarAcercaComponent,canActivate: [AuthGuard]},
  {path: 'agregar-experiencia',component:AgregarExperienciaComponent,canActivate: [AuthGuard]},
  {path: 'editar-experiencia/:id',component:EditarExperienciaComponent,canActivate: [AuthGuard]},
  {path: 'agregar-educacion',component:AgregarEducacionComponent,canActivate: [AuthGuard]},
  {path: 'editar-educacion/:id',component:EditarEducacionComponent,canActivate: [AuthGuard]},
  {path: "agregar-habilidades",component:AgregarHabilidadesComponent,canActivate: [AuthGuard]},
  {path: 'editar-habilidades/:id',component:EditarHabilidadesComponent,canActivate: [AuthGuard]},
  {path: "agregar-proyectos",component:AgregarProyectosComponent,canActivate: [AuthGuard]},
  {path: 'editar-proyectos/:id',component:EditarProyectosComponent,canActivate: [AuthGuard]},
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
