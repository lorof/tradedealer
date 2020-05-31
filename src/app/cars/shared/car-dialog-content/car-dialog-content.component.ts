import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Car } from '../car.model';

export interface DialogData {
  car: Car;
}

@Component({
  selector: 'app-car-dialog-content',
  templateUrl: './car-dialog-content.component.html',
  styleUrls: ['./car-dialog-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarDialogContentComponent {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
