import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {

  project:Project = new Project();

  constructor(private proyectsService:ProjectsService,private route:Router) {}

  ngOnInit(): void {}

  add() {
    this.proyectsService.add(this.project).subscribe(data => {
      console.log(data);
    });
    this.route.navigate(['']);
  }
}
