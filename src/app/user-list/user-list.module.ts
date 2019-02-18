import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
const routes: Routes = [
  { path: '', component: UserListComponent}
];
@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class UserListModule { }
