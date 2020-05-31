import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog-content',
  templateUrl: './success-dialog-content.component.html',
  styleUrls: ['./success-dialog-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessDialogContentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public goBack(): void {
    this.dialog.closeAll();
  }

}
