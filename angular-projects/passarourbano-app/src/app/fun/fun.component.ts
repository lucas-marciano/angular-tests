import { Component, OnInit } from '@angular/core';
import { Offert } from '../shared/offert.model'
import { OffertsService } from '../offerts.service'

@Component({
  selector: 'passaro-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'],
  providers: [OffertsService]
})
export class FunComponent implements OnInit {
  public funOfferts: Array<Offert>

  constructor(private offertsService: OffertsService) { }

  ngOnInit() {
    this.offertsService.getOffertsByCategory('diversao')
    .then((offerts: Offert[]) => {
      this.funOfferts = offerts 
    }).catch(
      (param: any) => { 
        console.log(param)
      }
    )
  }

}
