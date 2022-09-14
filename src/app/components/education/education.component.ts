import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import education from '../../assets/education.json'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education[] = education;

  constructor(private authService:AuthenticationService) {}

  ngOnInit(): void {}

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

}

