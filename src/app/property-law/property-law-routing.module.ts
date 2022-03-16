import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyLawComponent } from './property-law.component';

const routes: Routes = [{ path: '', component: PropertyLawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyLawRoutingModule { }
