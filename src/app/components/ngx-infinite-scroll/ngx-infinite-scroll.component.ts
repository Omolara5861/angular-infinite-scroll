import { Component } from '@angular/core';
import { Cat } from '../../app/model/cat';
import { CatService } from '../../app/service/cat.service';

@Component({
  selector: 'app-ngx-infinite-scroll',
  templateUrl: './ngx-infinite-scroll.component.html',
  styleUrls: ['./ngx-infinite-scroll.component.css']
})
export class NgxInfiniteScrollComponent {

  page=1;
  cats: Cat[]=[]

  catsArray!: Cat[];

  constructor(private catService: CatService) {
    this.catService.getAllCats(this.page).subscribe((cat: Cat[]) => {
      this.catsArray=cat;
      console.log(this.catsArray);
    },
      (err: any) => {
        console.log(err);
      })
  }

  onScroll(): void {
    this.catService.getAllCats(++this.page).subscribe((cats: Cat[]) => {
      this.catsArray.push(...cats)
    })
  }
}
