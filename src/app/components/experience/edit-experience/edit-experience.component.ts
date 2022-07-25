import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  id:number = 0;
  experience:Experience = new Experience();

  constructor(private experienciaService:ExperienceService) {}

  ngOnInit(): void {
    this.id = this.experienciaService.id;
    this.experienciaService.search(this.id).subscribe(data => {
      this.experience = data;
    },error => console.log(error));
  }

  public saveChanges() {
    this.experienciaService.edit(this.id,this.experience).subscribe(data => {
      console.log(data);
    },error => console.log(error));
  }

}

