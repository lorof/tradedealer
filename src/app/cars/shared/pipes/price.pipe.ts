import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    const transformedValue = value.toLocaleString('ru-RU')

    return `${transformedValue} ₽`;
  }

}
