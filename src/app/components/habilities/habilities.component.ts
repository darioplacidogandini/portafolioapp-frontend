import { Component, OnInit } from '@angular/core';
import habilities from '../../assets/habilities.json'

interface Hability {
  id:number,
  hability:String,
  percentage:number
} 

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
