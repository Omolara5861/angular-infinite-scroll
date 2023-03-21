import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cat } from 'src/app/model/cat';
import { CatService } from 'src/app/service/cat.service';

@Component({
  selector: 'app-intersection-observer-api',
  templateUrl: './intersection-observer-api.component.html',
  styleUrls: ['./intersection-observer-api.component.css']
})
export class IntersectionObserverAPIComponent {
  // Define a variable to hold the QueryList of the 'theLastList' elements
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList!: QueryList<ElementRef>;

  // Define a variable to hold the Subscription object returned by the catService.getAllCats method
  catSub!: Subscription;

  // Define an array to hold the list of 'Cat' objects
  catsArray: Cat[] = [];

  totalPages = 10;
  currentPage: number = 0;

  // Define a variable to hold the IntersectionObserver object
  observer: any;

  constructor(
    private catService: CatService,
  ) {}

  ngOnInit() {
    // Call the getCats method to fetch cats data
    this.getCats();
    // Call the intersectionObserver method to initialize
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    // Subscribe to changes in the QueryList 'theLastList.changes'
    /** When the last element is added to the QueryList, call 'observe' on the IntersectionObserver object */
    this.theLastList.changes.subscribe((d) => {
      if (d.last) this.observer.observe(d.last.nativeElement);
    });
  }

  getCats() {
    // Assign the returned Subscription object to 'catSub' variable
    this.catSub = this.catService.getAllCats(this.currentPage).subscribe((cat) => {
      // Iterate through the fetched 'Cat' data and push each item 
      cat.forEach((cat: Cat) => {
        this.catsArray.push(cat);
      });
    });
  }

  // Define a method to initialize IntersectionObserver
  intersectionObserver() {
    // Define the options for IntersectionObserver constructor
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    // Create a new IntersectionObserver object, assign it to the 'observer' variable
    this.observer = new IntersectionObserver((entries) => {
      // Runs When the threshold condition is met
      if (entries[0].isIntersecting) {
        //Runs When the current page is less than the total number of pages
        if (this.currentPage < this.totalPages) {
          //Runs Increment the current page number and call 'getCats' method to fetch more data
          this.currentPage++;
          this.getCats();
        }
      }
    }, options);
  }
}
