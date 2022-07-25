import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  experience:Experience = new Experience();

  constructor(private experienceService:ExperienceService) {}

  ngOnInit(): void {}

  add() {
    this.experienceService.add(this.experience).subscribe(data => {
      console.log(data);
    });
  }

}
