import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {

  constructor(private projectsService:ProjectsService, private route:Router) {}

  id:number = 0;
  project:Project = new Project();

  ngOnInit(): void {
    this.id = this.projectsService.id;
    this.projectsService.search(this.id).subscribe(data => {
      this.project = data;
    },error => console.log(error));
  }

  public saveChanges() {
    this.projectsService.edit(this.id,this.project).subscribe(data => {
      console.log(data);
    },error => console.log(error));
    this.route.navigate(['']);
  }
}
