import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about.model';
import about from '../../assets/about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About[] = about;

  constructor() {}

  ngOnInit(): void {}

}
