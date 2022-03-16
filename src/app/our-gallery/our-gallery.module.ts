import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurGalleryRoutingModule } from './our-gallery-routing.module';
import { OurGalleryComponent } from './our-gallery.component';


@NgModule({
  declarations: [
    OurGalleryComponent
  ],
  imports: [
    CommonModule,
    OurGalleryRoutingModule
  ]
})
export class OurGalleryModule { }
