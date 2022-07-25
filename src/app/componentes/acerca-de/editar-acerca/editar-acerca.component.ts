import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Acerca } from 'src/app/model/acerca.model';
import { AcercaService } from 'src/app/servicios/acerca.service';

@Component({
  selector: 'app-editar-acerca',
  templateUrl: './editar-acerca.component.html',
  styleUrls: ['./editar-acerca.component.css']
})
export class EditarAcercaComponent implements OnInit {

  id:number = 0;
  about:Acerca = new Acerca();

  constructor(private aboutService:AcercaService,public dialog:MatDialog) {}

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
    this.aboutService.list();
  }

}
