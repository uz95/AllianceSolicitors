import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyLawComponent } from './family-law.component';

const routes: Routes = [{ path: '', component: FamilyLawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyLawRoutingModule { }
