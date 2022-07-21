import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './servicios/interceptor.service';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AgregarEducacionComponent } from './componentes/educacion/agregar-educacion/agregar-educacion.component';
import { AgregarHabilidadesComponent } from './componentes/habilidades/agregar-habilidades/agregar-habilidades.component';
import { AgregarExperienciaComponent } from './componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { AgregarProyectosComponent } from './componentes/proyectos/agregar-proyectos/agregar-proyectos.component';
import { EditarAcercaComponent } from './componentes/acerca-de/editar-acerca/editar-acerca.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { EditarHabilidadesComponent } from './componentes/habilidades/editar-habilidades/editar-habilidades.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos/editar-proyectos.component';

@NgModule({
  declarations: [
    AppComponent, 
    PortfolioComponent,
    IniciarSesionComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    AgregarEducacionComponent,
    AgregarExperienciaComponent,
    AgregarProyectosComponent,
    AgregarHabilidadesComponent,
    EditarAcercaComponent,
    EditarExperienciaComponent,
    EditarEducacionComponent,
    EditarHabilidadesComponent,
    EditarProyectosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [ {  
    provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true 
  }
 ],
 bootstrap: [AppComponent],
})
export class AppModule {}
