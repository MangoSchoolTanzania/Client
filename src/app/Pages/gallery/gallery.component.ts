import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  photoPathArray:string[] = [];

  ngOnInit(): void {
    this.getPhotoPaths();
  }

  getPhotoPaths(){
    for(let i = 0; i <= 28; i ++){
      this.photoPathArray.push(`../../assets/img/${i}.jpeg`)
    }
  }

}
