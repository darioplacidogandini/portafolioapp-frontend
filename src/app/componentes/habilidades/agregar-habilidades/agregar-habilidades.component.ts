import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-agregar-habilidades',
  templateUrl: './agregar-habilidades.component.html',
  styleUrls: ['./agregar-habilidades.component.css']
})
export class AgregarHabilidadesComponent implements OnInit {

  ability:Habilidades = new Habilidades();

  constructor(private abilitiesService:HabilidadesService) {}

  ngOnInit(): void {}

  public addAbility() {
    this.abilitiesService.add(this.ability).subscribe(data => {
      console.log(data);
    });
  }

}
