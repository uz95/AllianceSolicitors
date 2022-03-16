import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CivilLigitationRoutingModule } from './civil-ligitation-routing.module';
import { CivilLigitationComponent } from './civil-ligitation.component';


@NgModule({
  declarations: [
    CivilLigitationComponent
  ],
  imports: [
    CommonModule,
    CivilLigitationRoutingModule
  ]
})
export class CivilLigitationModule { }
