import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CarService } from '../shared/car.service';
import { CarList } from '../shared/car-list.model';
import { Car } from '../shared/car.model';
import { MatDialog } from '@angular/material/dialog';
import { CarDialogContentComponent } from '../shared/car-dialog-content/car-dialog-content.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarListComponent implements OnInit {
  public carList: CarList[] = [];
  public currentCar?: Car;

  constructor(private carService: CarService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.getCarList();
  }

  private getCarList(): void {
    this.carService
      .getCars()
      .subscribe((carList) => this.carList.push(...carList));
  }

  public openDialog(car: Car): void {
    this.dialog.open(CarDialogContentComponent, {
      height: '100%',
      width: '100%',
      maxWidth: '100%',
      data: {
        car,
      },
    });
  }
}
