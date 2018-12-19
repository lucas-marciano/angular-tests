import { Component, OnInit } from '@angular/core';
import { Offert } from '../shared/offert.model'
import { OffertsService } from '../offerts.service'
@Component({
  selector: 'passaro-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [OffertsService]
})
export class RestaurantComponent implements OnInit {
  public retaurants: Array<Offert>

  constructor(private offertsService: OffertsService) { }

  ngOnInit() {
    this.offertsService.getOffertsByCategory('restaurante')
    .then((offerts: Offert[]) => {
      this.retaurants = offerts 
    }).catch(
      (param: any) => { 
        console.log(param)
      }
    )
  }

}
