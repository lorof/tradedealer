import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

import { CarsRoutingModule } from './cars-routing.module';
import { CarCardComponent } from './shared/car-card/car-card.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { PricePipe } from './shared/pipes/price.pipe';
import { CarDialogContentComponent } from './shared/car-dialog-content/car-dialog-content.component';
import { SuccessDialogContentComponent } from './shared/success-dialog-content/success-dialog-content.component';
import { CarCardWideComponent } from './shared/car-card-wide/car-card-wide.component';
import { CarCalculatorComponent } from './shared/car-calculator/car-calculator.component';

@NgModule({
  declarations: [
    CarCardComponent,
    CarDetailComponent,
    CarListComponent,
    PricePipe,
    CarDialogContentComponent,
    SuccessDialogContentComponent,
    CarCardWideComponent,
    CarCalculatorComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
  ],
})
export class CarsModule {}
