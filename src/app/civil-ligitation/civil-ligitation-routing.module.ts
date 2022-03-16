import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CivilLigitationComponent } from './civil-ligitation.component';

const routes: Routes = [{ path: '', component: CivilLigitationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CivilLigitationRoutingModule { }
