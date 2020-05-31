import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Car } from '../car.model';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardComponent {
  @Input() public car!: Car;
}
