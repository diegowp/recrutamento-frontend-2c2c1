import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchTagModule } from 'src/app/components/search-tag/search-tag.module';
import { SearchFilterModule } from 'src/app/components/search-filter/search-filter.module';
import { LoadModule } from 'src/app/shared/load/load.module';
import { TableModule } from 'src/app/shared/table/table.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchTagModule,
    SearchFilterModule,
    TableModule,
    LoadModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
