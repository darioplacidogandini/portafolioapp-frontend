import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { About } from 'src/app/model/about.model';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  id:number = 0;
  about:About = new About();

  constructor(private aboutService:AboutService,private route:Router,
    public dialog:MatDialog) {}

  ngOnInit(): void {
    this.id = this.aboutService.id;
    this.aboutService.search(this.id).subscribe(data => {
      this.about = data;
    }, error => console.log(error));
  }

  saveChanges() {
    this.aboutService.edit(this.id,this.about).subscribe(data => {
      console.log(data);
    }, error => console.log(error)); 
    this.route.navigate(['']);
  }
}
