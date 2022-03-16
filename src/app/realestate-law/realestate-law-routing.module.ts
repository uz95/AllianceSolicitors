import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealestateLawComponent } from './realestate-law.component';

const routes: Routes = [{ path: '', component: RealestateLawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealestateLawRoutingModule { }
