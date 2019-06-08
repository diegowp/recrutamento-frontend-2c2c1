import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaDetailRoutingModule } from './cla-detail-routing.module';
import { ClaDetailComponent } from './cla-detail.component';
import { LoadModule } from 'src/app/shared/load/load.module';

@NgModule({
  declarations: [ClaDetailComponent],
  imports: [
    CommonModule,
    ClaDetailRoutingModule,
    LoadModule
  ],
  exports: [ClaDetailComponent]
})
export class ClaDetailModule { }
