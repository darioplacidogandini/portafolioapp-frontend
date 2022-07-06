import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca.model';
import { AcercaService } from 'src/app/servicios/acerca.service';

@Component({
  selector: 'app-editar-acerca',
  templateUrl: './editar-acerca.component.html',
  styleUrls: ['./editar-acerca.component.css']
})
export class EditarAcercaComponent implements OnInit {

  id: number = 0;
  acerca: Acerca = new Acerca();

  constructor(private acercaService:AcercaService,private rutaActual:ActivatedRoute,
    private route:Router,public editDialog:MatDialog) {}

  ngOnInit(): void {
    this.id = this.rutaActual.snapshot.params['id'];
    this.acercaService.buscar(this.id).subscribe(data => {
      this.acerca = data;
    }, error => console.log(error));
  }

  guardarCambios(id :number) {
    this.acercaService.editar(this.id,this.acerca).subscribe(data => {
      console.log(data);
    }, error => console.log(error)); 
    this.route.navigate(['']);
  }

}
