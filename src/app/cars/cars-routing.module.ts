import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id', component: CarDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
