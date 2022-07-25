import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { About } from 'src/app/model/about.model';
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

  constructor(private aboutService:AboutService,private authService:AuthenticationService,
    public dialog:MatDialog) {}

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

  public openEditDialog(id:number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.aboutService.id = id;
    this.dialog.open(EditAboutComponent,dialogConfig);
  }
  
}
