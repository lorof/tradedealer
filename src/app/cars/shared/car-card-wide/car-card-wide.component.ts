import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-card-wide',
  templateUrl: './car-card-wide.component.html',
  styleUrls: ['./car-card-wide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardWideComponent implements OnInit {
  @Input() public car!: Car;

  constructor() { }

  public ngOnInit(): void {
  }

}
