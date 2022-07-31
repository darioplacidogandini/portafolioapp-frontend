import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  education:Education = new Education();

  constructor(private educationService:EducationService,private route:Router) {}

  ngOnInit(): void {}

  public add() {
    this.educationService.add(this.education).subscribe(data => {
      console.log(data);
      this.educationService.list();
    });
    this.route.navigate(['']);
    window.location.reload();
  }

}
