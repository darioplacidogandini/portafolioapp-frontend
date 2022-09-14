import { Component, OnInit } from '@angular/core';
import education from '../../assets/education.json'

interface Education {
  id:number;
  title:string;
  institution:string;
  date:string;
  duration:number;
  institutionLogo:string;  
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education[] = education;

  constructor() {}

  ngOnInit(): void {}
}

