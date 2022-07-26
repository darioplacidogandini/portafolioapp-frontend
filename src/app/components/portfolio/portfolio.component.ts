import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  public loadingScreen() {
      this.dialog.open(LoadingDialog);
      setTimeout(() => this.dialog.closeAll(),10000);
  }
}

@Component({
  selector: 'loading.dialog',
  templateUrl: 'loading.dialog.html',
})
export class LoadingDialog {}

