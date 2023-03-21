import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxInfiniteScrollComponent } from '../components/ngx-infinite-scroll/ngx-infinite-scroll.component';
import { IntersectionObserverAPIComponent } from '../components/intersection-observer-api/intersection-observer-api.component';

const routes: Routes = [
  {path: 'ngx-scroll', component: NgxInfiniteScrollComponent},
  {path: 'intersect-observer-scroll', component: IntersectionObserverAPIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }