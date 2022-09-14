import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Experience } from 'src/app/model/experience.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ExperienceService } from 'src/app/services/experience.service';
import experience from '../../assets/experience.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  experience:Experience[] = experience;
  id:number = 0;
  
  constructor(private experienceService:ExperienceService,private authService:AuthenticationService,
    public dialog:MatDialog) {}

  ngOnInit(): void {}

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public delete(id:number) {
    alert(id);
  }

}


