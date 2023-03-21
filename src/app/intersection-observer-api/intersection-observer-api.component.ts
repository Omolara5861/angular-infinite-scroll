import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cat } from '../model/cat';
import { CatService } from '../service/cat.service';

@Component({
  selector: 'app-intersection-observer-api',
  templateUrl: './intersection-observer-api.component.html',
  styleUrls: ['./intersection-observer-api.component.css']
})
export class IntersectionObserverAPIComponent {
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList!: QueryList<ElementRef>;

  catSub!: Subscription;

  catsArray: Cat[] = [];

  totalPages = 10;
  currentPage: number = 0;

  observer: any;

  constructor(
    private catService: CatService,
  ) {}

  ngOnInit() {
    this.getCats();
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.theLastList.changes.subscribe((d) => {
      if (d.last) this.observer.observe(d.last.nativeElement);
    });
  }

  getCats() {
    this.catSub = this.catService.getAllCats(this.currentPage).subscribe((cat) => {
      cat.forEach((cat: Cat) => {
        this.catsArray.push(cat);
      });
    });
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.getCats();
        }
      }
    }, options);
  }
}
