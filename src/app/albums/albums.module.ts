import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
const routes: Routes = [
  { path: '', component: AlbumsComponent}
];
@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class AlbumsModule { }
