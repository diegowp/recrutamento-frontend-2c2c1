import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListModule } from './country-list/country-list.module';
import { LoadModule } from './load/load.module';
import { TableModule } from './table/table.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountryListModule,
    LoadModule,
    TableModule
  ]
})
export class SharedModule { }
