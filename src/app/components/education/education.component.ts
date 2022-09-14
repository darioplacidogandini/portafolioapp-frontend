import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education.model';
import education from '../../assets/education.json'

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

