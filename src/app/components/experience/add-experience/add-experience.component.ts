import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  experience:Experience = new Experience();

  constructor(private experienceService:ExperienceService,private route:Router) {}

  ngOnInit(): void {}

  add() {
    this.experienceService.add(this.experience).subscribe(data => {
      console.log(data);
    });
    this.route.navigate(['']);
    window.location.reload();
  }

}
