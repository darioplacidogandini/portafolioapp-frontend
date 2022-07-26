import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  dialogConfig = new MatDialogConfig();

    constructor() {
      this.dialogConfig.disableClose = true;
      this.dialogConfig.autoFocus = true;
    }
}
