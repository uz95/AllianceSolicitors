import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealestateLawRoutingModule } from './realestate-law-routing.module';
import { RealestateLawComponent } from './realestate-law.component';


@NgModule({
  declarations: [
    RealestateLawComponent
  ],
  imports: [
    CommonModule,
    RealestateLawRoutingModule
  ]
})
export class RealestateLawModule { }
