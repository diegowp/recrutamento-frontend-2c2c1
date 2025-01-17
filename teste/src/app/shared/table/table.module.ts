import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
