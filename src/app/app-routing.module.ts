import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { AddEducationComponent } from './components/education/add-education/add-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { AddExperienceComponent } from './components/experience/add-experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { AddHabilitiesComponent } from './components/habilities/add-habilities/add-habilities.component';
import { EditHabilitiesComponent } from './components/habilities/edit-habilities/edit-habilities.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AddProjectsComponent } from './components/projects/add-projects/add-projects.component';
import { EditProjectsComponent } from './components/projects/edit-projects/edit-projects.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
  {path: 'login',component:LoginComponent},
  {path: '',redirectTo: 'portfolio', pathMatch: 'full'},
  {path: 'edit-about/:id',component:EditAboutComponent,canActivate: [AuthGuard]},
  {path: 'add-experience',component:AddExperienceComponent,canActivate: [AuthGuard]},
  {path: 'edit-experience/:id',component:EditExperienceComponent,canActivate: [AuthGuard]},
  {path: 'add-education',component:AddEducationComponent,canActivate: [AuthGuard]},
  {path: 'edit-education/:id',component:EditEducationComponent,canActivate: [AuthGuard]},
  {path: "add-habilities",component:AddHabilitiesComponent,canActivate: [AuthGuard]},
  {path: 'edit-habilities/:id',component:EditHabilitiesComponent,canActivate: [AuthGuard]},
  {path: "add-projects",component:AddProjectsComponent,canActivate: [AuthGuard]},
  {path: 'edit-projects/:id',component:EditProjectsComponent,canActivate: [AuthGuard]},
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
