import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleAttorneysRoutingModule } from './single-attorneys-routing.module';
import { SingleAttorneysComponent } from './single-attorneys.component';


@NgModule({
  declarations: [
    SingleAttorneysComponent
  ],
  imports: [
    CommonModule,
    SingleAttorneysRoutingModule
  ]
})
export class SingleAttorneysModule { }
