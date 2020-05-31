import { Injectable } from '@angular/core';
import { TARIFF } from './mock-tariff';

@Injectable({
  providedIn: 'root',
})
export class TariffService {
  constructor() {}

  public getRandomTariff() {
    return TARIFF[Math.round(Math.random() * TARIFF.length)];
  }
}
