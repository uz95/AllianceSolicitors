import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurGalleryComponent } from './our-gallery.component';

const routes: Routes = [{ path: '', component: OurGalleryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurGalleryRoutingModule { }
