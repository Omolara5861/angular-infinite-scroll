import { Component } from '@angular/core';
import { Cat } from './model/cat';
import { CatService } from './service/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products-infinite-scroll';

  catsArray!: Cat[];

  constructor(private catService: CatService) {
    this.catService.getAllCats().subscribe((cat: any) => {
      this.catsArray = cat;
      console.log(this.catsArray);
    },
    (err:any) => {
      console.log(err);
    })
  }

}
