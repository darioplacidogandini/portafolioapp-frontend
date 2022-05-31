import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca.model';
import { AcercaService } from 'src/app/servicios/acerca.service';

@Component({
  selector: 'app-editar-acerca',
  templateUrl: './editar-acerca.component.html',
  styleUrls: ['./editar-acerca.component.css']
})
export class EditarAcercaComponent implements OnInit {

  acerca: Acerca = {
    nombre: '',
    puesto: '',
    foto: '',
    portada: ''
  };

  constructor(private acercaService:AcercaService, private ruta:Router) {}

  ngOnInit(): void {}

  guardarCambios() {
    this.acercaService.editar(this.acerca).subscribe();
    this.ruta.navigate(['/portfolio']);
  }

}
