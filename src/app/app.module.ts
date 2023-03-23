import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxInfiniteScrollComponent } from './components/ngx-infinite-scroll/ngx-infinite-scroll.component';
import { IntersectionObserverAPIComponent } from './components/intersection-observer-api/intersection-observer-api.component';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { IsVisibleDirective } from './directive/is-visible.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgxInfiniteScrollComponent,
    IntersectionObserverAPIComponent,
    IsVisibleDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
