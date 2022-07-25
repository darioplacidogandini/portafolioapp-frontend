import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {

  constructor(private abilityService:HabilidadesService) {}

  id:number = 0;
  ability:Habilidades = new Habilidades();

  ngOnInit(): void {
    this.id = this.abilityService.id;
    this.abilityService.search(this.id).subscribe(data => {
      this.ability = data;
    }, error => console.log(error));
  }

  public saveChanges() {
    this.abilityService.edit(this.id,this.ability).subscribe(data => {
      console.log(data)
    },error => console.log(error));
  }

}
