import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CarService } from '../shared/car.service';
import { Car } from '../shared/car.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarDetailComponent implements OnInit {
  public car?: Car;

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.getCar(id));
  }

  private getCar(carId: string): void {
    this.carService.getCar(carId).subscribe((car) => (this.car = car));
  }
}
