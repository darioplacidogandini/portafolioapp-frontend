import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  databaseLoaded:boolean = false;

  constructor(private dialogsService:DialogsService,private dialog:MatDialog,
    private authenticationService:AuthenticationService) {}

  ngOnInit(): void {
    if (this.databaseLoaded === false) {
      this.loadingScreen();
    }
  }

  public loadingScreen() {
      this.dialog.open(LoadingDialog,this.dialogsService.loadingDialogConfig);
      setTimeout(() => this.dialog.closeAll(),1000);
      this.databaseLoaded = true;
  }
}

@Component({
  selector: 'loading.dialog',
  templateUrl: './loading.dialog.html'
})
export class LoadingDialog {}

