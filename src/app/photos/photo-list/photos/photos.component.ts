import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Input() photos:Photo[] = [];
  rows: any[] = [];
  constructor() { }

  ngOnInit() {
    this.rows = this.groupColumns(this.photos);
  }


  groupColumns(photos: Photo[]){
    const newRows = [];

    //incrmentar de 3 em 3 photos
    for(let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }
}
