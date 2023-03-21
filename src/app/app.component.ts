import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cat } from './model/cat';
import { CatService } from './service/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cats-infinite-scroll';
}
