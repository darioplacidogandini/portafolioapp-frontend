import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Hability } from 'src/app/model/hability.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DialogsService } from 'src/app/services/dialogs.service';
import { HabilitiesService } from 'src/app/services/habilities.service';
import { AddHabilitiesComponent } from './add-habilities/add-habilities.component';
import { EditHabilitiesComponent } from './edit-habilities/edit-habilities.component';

@Component({
  selector: 'app-habilities',
  templateUrl: './habilities.component.html',
  styleUrls: ['./habilities.component.css']
})
export class HabilitiesComponent implements OnInit {

  habilities:Hability[] = [];

  constructor(private habilitiesService:HabilitiesService,private authService:AuthenticationService,
    public dialogsService:DialogsService,public dialog:MatDialog) {}

  ngOnInit(): void {
    this.listAbilities();
  }

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  public listAbilities() {
    this.habilitiesService.list().subscribe(data => {
      this.habilities = data;
    });
  }

  public addAbility() {
    this.dialog.open(AddHabilitiesComponent,this.dialogsService.dialogConfig);
  }

  public editAbility(id:number) {
    this.habilitiesService.id = id;
    this.dialog.open(EditHabilitiesComponent,this.dialogsService.dialogConfig);
  }

  public deleteAbility(id:number) {
    this.habilitiesService.delete(id).subscribe(data => {
      console.log(data);
    });
    this.listAbilities();
  }
}
