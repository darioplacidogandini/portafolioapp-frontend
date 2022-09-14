import { Component, OnInit } from '@angular/core';
import about from '../../assets/about.json';

interface About {
  profilePhoto:String,
  headerImage:String,
  name:String,
  job:String;
}

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
