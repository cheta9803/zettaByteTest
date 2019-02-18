import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
const routes: Routes = [
  { path: '', component: PhotosComponent}
];
@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class PhotosModule { }
