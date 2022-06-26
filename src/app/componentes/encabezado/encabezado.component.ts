import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  headerList:any;
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private authenticationService:AuthenticationService,
    private authService:AuthenticationService,private route:Router) {}

  ngOnInit(): void {}

  public isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  closeSession() {
    this.authenticationService.logOut();
  }

  checkLogin() {
    (this.authService.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.route.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    ));
  }

}
