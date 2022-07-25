import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component'
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AddExperienceComponent } from './components/experience/add-experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { EducationComponent } from './components/education/education.component';
import { AddEducationComponent } from './components/education/add-education/add-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { AddHabilitiesComponent } from './components/habilities/add-habilities/add-habilities.component';
import { EditHabilitiesComponent } from './components/habilities/edit-habilities/edit-habilities.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectsComponent } from './components/projects/add-projects/add-projects.component';
import { EditProjectsComponent } from './components/projects/edit-projects/edit-projects.component';

@NgModule({
  declarations: [
    AppComponent, 
    PortfolioComponent,
    LoginComponent,
    HeaderComponent,
    AboutComponent,
    EditAboutComponent,
    ExperienceComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    EducationComponent,
    AddEducationComponent,
    EditEducationComponent,
    HabilitiesComponent,
    AddHabilitiesComponent,
    EditHabilitiesComponent,
    ProjectsComponent,
    AddProjectsComponent,
    EditProjectsComponent
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
