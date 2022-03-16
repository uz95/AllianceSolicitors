import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialLawComponent } from './financial-law.component';

const routes: Routes = [{ path: '', component: FinancialLawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialLawRoutingModule { }
