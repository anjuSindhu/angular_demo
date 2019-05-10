import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImages = [];
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id)
  }
  constructor() { }
}

const IMAGES = [
  {"id": 1, "category": "food", "caption": "View of coffee1", "url": "assets/img/food1.jpg"},
  {"id": 2, "category": "food", "caption": "View of coffee2", "url": "assets/img/food2.jpg"},
  {"id": 3, "category": "food", "caption": "View of food", "url": "assets/img/food3.jpg"},
  {"id": 4, "category": "fest", "caption": "View from a festival", "url": "assets/img/fest1.jpg"},
  {"id": 5, "category": "fest", "caption": "View from a festival2", "url": "assets/img/fest2.jpg"},
  {"id": 6, "category": "fest", "caption": "View from a festival3", "url": "assets/img/fest3.jpg"},
  {"id": 7, "category": "river", "caption": "View from a river1", "url": "assets/img/river1.jpg"},
  {"id": 8, "category": "river", "caption": "View from a river2", "url": "assets/img/river2.jpg"},
  {"id": 9, "category": "river", "caption": "View from a river3", "url": "assets/img/river3.jpg"},
]
