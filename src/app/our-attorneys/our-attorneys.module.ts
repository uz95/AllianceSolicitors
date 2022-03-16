import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurAttorneysRoutingModule } from './our-attorneys-routing.module';
import { OurAttorneysComponent } from './our-attorneys.component';


@NgModule({
  declarations: [
    OurAttorneysComponent
  ],
  imports: [
    CommonModule,
    OurAttorneysRoutingModule
  ]
})
export class OurAttorneysModule { }
