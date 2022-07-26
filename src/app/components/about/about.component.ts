import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { About } from 'src/app/model/about.model';
import { DialogsService } from 'src/app/services/dialogs.service';
import { AboutService } from 'src/app/services/about.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EditAboutComponent } from './edit-about/edit-about.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about:About[] = [];

  constructor(private dialogsService:DialogsService,private aboutService:AboutService,
    private authService:AuthenticationService,public dialog:MatDialog) {}

  ngOnInit(): void {
    this.list();
    }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }
    
  public list() {
    this.aboutService.list().subscribe(data => {
      this.about = data;
    });
  }

  public openEditDialog() {
    this.dialog.open(EditAboutComponent,this.dialogsService.dialogConfig);
  }
  
}
