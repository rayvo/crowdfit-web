import { Component, OnInit } from '@angular/core';



export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-store-product-modified',
  templateUrl: './store-product-modified.component.html',
  styleUrls: ['./store-product-modified.component.scss']
})
export class StoreProductModifiedComponent {
  foods: Food[] = [
    {value: 'pt-0', viewValue: 'PT'},
    {value: 'golf-1', viewValue: '골프'},
    {value: 'swim-2', viewValue: '수영'}
  ];
}
