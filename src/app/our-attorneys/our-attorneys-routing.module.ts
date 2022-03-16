import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurAttorneysComponent } from './our-attorneys.component';

const routes: Routes = [{ path: '', component: OurAttorneysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurAttorneysRoutingModule { }
