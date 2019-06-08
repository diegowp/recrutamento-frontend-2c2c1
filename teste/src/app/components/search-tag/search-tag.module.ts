import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchTagComponent } from './search-tag.component';
import { LoadModule } from 'src/app/shared/load/load.module';

@NgModule({
  declarations: [SearchTagComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoadModule
  ],
  exports: [
    SearchTagComponent
  ]
})
export class SearchTagModule { }
