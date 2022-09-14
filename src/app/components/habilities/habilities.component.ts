import { Component, OnInit } from '@angular/core';
import { Hability } from 'src/app/model/hability.model';
import habilities from '../../assets/habilities.json'

@Component({
  selector: 'app-habilities',
  templateUrl: './habilities.component.html',
  styleUrls: ['./habilities.component.css']
})
export class HabilitiesComponent implements OnInit {

  habilities: Hability[] = habilities;

  constructor() {}

  ngOnInit(): void {}
}
