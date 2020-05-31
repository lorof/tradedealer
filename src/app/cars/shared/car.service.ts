import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, flatMap, find } from 'rxjs/operators';

import { CarList } from './car-list.model';
import { CARS } from './mock-cars';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  public getCars(): Observable<CarList[]> {
    return of(CARS);
  }

  public getCar(carId: string): Observable<Car | undefined> {
    return from(CARS).pipe(
      flatMap(({ cars }) => (cars)),
      find((cars) => cars.id === carId)
    );
  }
}
