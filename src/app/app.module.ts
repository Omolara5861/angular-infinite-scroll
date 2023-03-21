import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxInfiniteScrollComponent } from './ngx-infinite-scroll/ngx-infinite-scroll.component';
import { IntersectionObserverAPIComponent } from './intersection-observer-api/intersection-observer-api.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxInfiniteScrollComponent,
    IntersectionObserverAPIComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
