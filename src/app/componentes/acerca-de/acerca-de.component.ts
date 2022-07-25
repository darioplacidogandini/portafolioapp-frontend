import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Acerca } from 'src/app/model/acerca.model';
import { AcercaService } from 'src/app/servicios/acerca.service';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { EditarAcercaComponent } from './editar-acerca/editar-acerca.component';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  about:Acerca[] = [];

  constructor(private aboutService:AcercaService,private authService:AuthenticationService,
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
    this.dialog.open(EditarAcercaComponent);
  }
  
}
