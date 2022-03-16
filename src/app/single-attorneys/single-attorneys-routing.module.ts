import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleAttorneysComponent } from './single-attorneys.component';

const routes: Routes = [{ path: '', component: SingleAttorneysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleAttorneysRoutingModule { }
