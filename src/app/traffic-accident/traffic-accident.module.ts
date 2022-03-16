import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrafficAccidentRoutingModule } from './traffic-accident-routing.module';
import { TrafficAccidentComponent } from './traffic-accident.component';


@NgModule({
  declarations: [
    TrafficAccidentComponent
  ],
  imports: [
    CommonModule,
    TrafficAccidentRoutingModule
  ]
})
export class TrafficAccidentModule { }
