import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListModule } from './country-list/country-list.module';
import { LoadModule } from './load/load.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountryListModule,
    LoadModule
  ]
})
export class SharedModule { }
