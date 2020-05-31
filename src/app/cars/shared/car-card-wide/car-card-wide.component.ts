import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Car } from '../car.model';

@Component({
  selector: 'app-car-card-wide',
  templateUrl: './car-card-wide.component.html',
  styleUrls: ['./car-card-wide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardWideComponent {
  @Input() public car!: Car;
}
