import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects:Project[] = [];

  constructor(private projectsService:ProjectsService,private authService:AuthenticationService,
  public route:Router,public dialog:MatDialog) {}

  ngOnInit(): void {}

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

}
