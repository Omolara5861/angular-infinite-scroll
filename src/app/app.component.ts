import { Component } from '@angular/core';
import { Photo } from './model/photo';
import { PhotoService } from './service/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products-infinite-scroll';

  photosArray!: Photo[];

  constructor(private photoService: PhotoService) {
    this.photoService.getAllPhotos().subscribe((photos: any) => {
      this.photosArray = photos;
      console.log(this.photosArray);
    },
    (err) => {
      console.log(err);
    })
  }

}
