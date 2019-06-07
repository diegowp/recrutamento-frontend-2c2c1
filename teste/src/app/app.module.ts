import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './services/HttpInterceptor';
import { SearchTagModule } from './components/search-tag/search-tag.module';
import { SearchFilterModule } from './components/search-filter/search-filter.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Interceptor,
    SearchTagModule,
    SearchFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
