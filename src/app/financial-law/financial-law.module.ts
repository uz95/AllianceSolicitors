import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialLawRoutingModule } from './financial-law-routing.module';
import { FinancialLawComponent } from './financial-law.component';


@NgModule({
  declarations: [
    FinancialLawComponent
  ],
  imports: [
    CommonModule,
    FinancialLawRoutingModule
  ]
})
export class FinancialLawModule { }
