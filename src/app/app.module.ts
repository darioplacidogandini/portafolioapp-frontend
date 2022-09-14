import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { LoadingDialog, PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component'
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent, 
    PortfolioComponent,
    LoadingDialog,
    LoginComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HabilitiesComponent,
    ProjectsComponent,
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
