import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects:Project[] = [];

  constructor(private projectsService:ProjectsService,private authService:AuthenticationService,
      public dialog:MatDialog) {}

  ngOnInit(): void {
    this.list();
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public list() {
    this.projectsService.list().subscribe(data => {
      this.projects = data;
    }); 
  }

  public openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddProjectsComponent,dialogConfig);
  }

  public openEditDialog(id:number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.projectsService.id = id;
    this.dialog.open(EditProjectsComponent,dialogConfig);
  }

  public delete(id:number) {
    this.projectsService.delete(id).subscribe(data => {
      console.log(data);
      this.list();
    })
  }

}
