import { Component, OnInit } from '@angular/core';
import { Hability } from 'src/app/model/hability.model';
import { HabilitiesService } from 'src/app/services/habilities.service';

@Component({
  selector: 'app-add-habilities',
  templateUrl: './add-habilities.component.html',
  styleUrls: ['./add-habilities.component.css']
})
export class AddHabilitiesComponent implements OnInit {

  hability:Hability = new Hability();

  constructor(private habilitiesService:HabilitiesService) {}

  ngOnInit(): void {}

  public add() {
    this.habilitiesService.add(this.hability).subscribe(data => {
      console.log(data);
      this.habilitiesService.list();
    });
  }
}
