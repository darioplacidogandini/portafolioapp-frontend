import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  id:number = 0;
  education:Education = new Education();

    constructor(private educationService:EducationService) {
    }
  
    ngOnInit(): void {
      this.id = this.educationService.id;
      this.educationService.search(this.id).subscribe(data => {
        this.education = data;
      }, error => console.log(error));  
    }

    public saveChanges() {
      this.educationService.edit(this.id,this.education).subscribe(data => {
        console.log(data);
      }, error => console.log(error));
    }
}

