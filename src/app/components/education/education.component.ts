import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsService } from 'src/app/services/dialogs.service';
import { Education } from 'src/app/model/education.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EducationService } from 'src/app/services/education.service';
import { AddEducationComponent } from './add-education/add-education.component';
import { EditEducationComponent } from './edit-education/edit-education.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education:Education[] = [];
  id:number = 0;

  constructor(private dialogsService:DialogsService,private educationService:EducationService,
    private authService:AuthenticationService,public dialog:MatDialog) {}

  ngOnInit(): void {
    this.list();
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public list() {
    this.educationService.list().subscribe(data => {
      this.education = data;
    });
  }

  public openAddDialog() {
    this.dialog.open(AddEducationComponent,this.dialogsService.dialogConfig);
  }

  public openEditDialog(id:number) {
    this.educationService.id = id;
    this.dialog.open(EditEducationComponent,this.dialogsService.dialogConfig);
  }

  public delete(id:number) {
    this.educationService.delete(id).subscribe(data => {
      console.log(data);
      this.list();
    });
  }

}

