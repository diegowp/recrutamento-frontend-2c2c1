import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountryListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CountryListComponent]
})
export class CountryListModule { }
