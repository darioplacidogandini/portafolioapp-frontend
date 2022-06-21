import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from 'src/app/model/acerca.model';
import { AcercaService } from 'src/app/servicios/acerca.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acerca: Acerca[] = [];

  constructor(private datosAcerca:AcercaService) { }

  ngOnInit(): void {
    this.listar();
    }
    
  public listar() {
    this.datosAcerca.listar().subscribe(data => {
      this.acerca = data;
    });
  }
  
}
