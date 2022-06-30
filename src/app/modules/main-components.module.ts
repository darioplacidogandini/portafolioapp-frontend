import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from '../componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from '../componentes/experiencia/experiencia.component';
import { EducacionComponent } from '../componentes/educacion/educacion.component';
import { HabilidadesComponent } from '../componentes/habilidades/habilidades.component';
import { ProyectosComponent } from '../componentes/proyectos/proyectos.component';
import { PortfolioComponent } from '../componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from '../componentes/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PortfolioComponent,
    IniciarSesionComponent,
  ],
  imports: [
    CommonModule,
  ],
  bootstrap: []
})
export class MainComponentsModule { }
