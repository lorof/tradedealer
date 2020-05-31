import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pairwise } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { Car } from '../car.model';
import { SuccessDialogContentComponent } from '../success-dialog-content/success-dialog-content.component';

@Component({
  selector: 'app-car-calculator',
  templateUrl: './car-calculator.component.html',
  styleUrls: ['./car-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCalculatorComponent implements OnInit {
  @Input() public car!: Car;

  public minPayment = 0;
  public payment = 0;
  public paymentSteps = 0;
  public paymentInMonth = 5000;
  public period = 12;
  private paymentInMonth$ = new BehaviorSubject<number>(this.paymentInMonth);
  private period$ = new BehaviorSubject<number>(this.period);

  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {
    const paymentPercent = Math.floor(
      (10 / 100) * (this.car.price - this.car.sale)
    );

    this.payment = paymentPercent;
    this.minPayment = paymentPercent;
    this.paymentSteps = Math.floor(
      (5 / 100) * (this.car.price - this.car.sale)
    );

    this.period$
      .pipe(pairwise())
      .subscribe(([previousValue, currentValue]) => {
        if (previousValue > currentValue) {
          this.paymentInMonth += 1000;
        } else if (this.paymentInMonth > 0) {
          this.paymentInMonth -= 1000;
        }
      });

    this.paymentInMonth$
      .pipe(pairwise())
      .subscribe(([previousValue, currentValue]) => {
        if (previousValue > currentValue) {
          this.period += 12;
        } else if (this.period > 0) {
          this.period -= 12;
        } else {
          this.period = 0;
        }
      });
  }

  public paymentInMonthChange(value: number): void {
    this.paymentInMonth = value;
    this.paymentInMonth$.next(value);
  }

  public periodChange(value: number): void {
    this.period = value;
    this.period$.next(value);
  }

  public ngOnDestroy(): void {
    this.period$.unsubscribe();
    this.paymentInMonth$.unsubscribe();
  }

  public sendCalculatedValues(): void {
    this.dialog.open(SuccessDialogContentComponent);
  }
}
