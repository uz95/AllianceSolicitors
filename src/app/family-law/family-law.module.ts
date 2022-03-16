import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyLawRoutingModule } from './family-law-routing.module';
import { FamilyLawComponent } from './family-law.component';


@NgModule({
  declarations: [
    FamilyLawComponent
  ],
  imports: [
    CommonModule,
    FamilyLawRoutingModule
  ]
})
export class FamilyLawModule { }
