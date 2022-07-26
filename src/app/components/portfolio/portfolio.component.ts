import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private dialogsService:DialogsService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadingScreen();
  }

  public loadingScreen() {
      this.dialog.open(LoadingDialog,this.dialogsService.dialogConfig);
      setTimeout(() => this.dialog.closeAll(),8000);
  }
}

@Component({
  selector: 'loading.dialog',
  templateUrl: './loading.dialog.html'
})
export class LoadingDialog {}

