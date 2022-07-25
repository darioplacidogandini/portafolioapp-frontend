import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Experience } from 'src/app/model/experience.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  experience:Experience[] = [];
  id:number = 0;
  
  constructor(private experienceService:ExperienceService,private authService:AuthenticationService,
    public dialog:MatDialog) {}

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this.experienceService.list().subscribe(data => {
      this.experience = data;
    });
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddExperienceComponent,dialogConfig);
  }

  public openEditDialog(id:number) {
    this.experienceService.id = id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(EditExperienceComponent,dialogConfig);
  }

  public delete(id:number) {
    this.experienceService.delete(id).subscribe(data => {
      console.log(data);
      this.list();
    });
  }
}


