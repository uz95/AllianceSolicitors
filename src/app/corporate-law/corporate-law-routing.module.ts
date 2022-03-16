import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateLawComponent } from './corporate-law.component';

const routes: Routes = [{ path: '', component: CorporateLawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateLawRoutingModule { }
