import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateLawRoutingModule } from './corporate-law-routing.module';
import { CorporateLawComponent } from './corporate-law.component';


@NgModule({
  declarations: [
    CorporateLawComponent
  ],
  imports: [
    CommonModule,
    CorporateLawRoutingModule
  ]
})
export class CorporateLawModule { }
