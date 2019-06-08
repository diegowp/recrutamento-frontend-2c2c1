import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter.component';
import { CountryListModule } from 'src/app/shared/country-list/country-list.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadModule } from 'src/app/shared/load/load.module';

@NgModule({
  declarations: [SearchFilterComponent],
  imports: [
    CommonModule,
    CountryListModule,
    ReactiveFormsModule,
    LoadModule
  ],
  exports: [
    SearchFilterComponent
  ]
})
export class SearchFilterModule { }
