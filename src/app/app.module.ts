import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { EditarAcercaComponent } from './componentes/acerca-de/editar-acerca/editar-acerca.component';
import { AgregarEducacionComponent } from './componentes/educacion/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from './componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { AgregarProyectosComponent } from './componentes/proyectos/agregar-proyectos/agregar-proyectos.component';
import { AgregarHabilidadesComponent } from './componentes/habilidades/agregar-habilidades/agregar-habilidades.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarHabilidadesComponent } from './componentes/habilidades/editar-habilidades/editar-habilidades.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos/editar-proyectos.component';
import { InterceptorService } from './servicios/interceptor.service';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PortfolioComponent,
    IniciarSesionComponent,
    EditarAcercaComponent,
    AgregarEducacionComponent,
    AgregarExperienciaComponent,
    AgregarProyectosComponent,
    AgregarHabilidadesComponent,
    EditarEducacionComponent,
    EditarExperienciaComponent,
    EditarHabilidadesComponent,
    EditarProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule
  ], exports: [
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [ {  
    provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true 
  }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
