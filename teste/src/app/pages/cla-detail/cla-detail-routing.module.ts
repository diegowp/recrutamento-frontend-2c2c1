import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaDetailComponent } from './cla-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaDetailRoutingModule { }
