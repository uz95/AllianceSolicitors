import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyLawRoutingModule } from './property-law-routing.module';
import { PropertyLawComponent } from './property-law.component';


@NgModule({
  declarations: [
    PropertyLawComponent
  ],
  imports: [
    CommonModule,
    PropertyLawRoutingModule
  ]
})
export class PropertyLawModule { }
