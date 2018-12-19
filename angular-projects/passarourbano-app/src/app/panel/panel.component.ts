import { Component, OnInit } from '@angular/core';
import { OffertsService } from '../offerts.service'
import { Offert } from '../shared/offert.model'

@Component({
  selector: 'passaro-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [OffertsService]
})
export class PanelComponent implements OnInit {

  public offerts: Array<Offert>

  constructor(private offertsService: OffertsService) { 

  }

  ngOnInit() {
     this.offertsService.getOfferts()
      .then(
        (offerts: Offert[]) => { 
          this.offerts = offerts 
        }
      ).catch(
        (param: any) => { 
          console.log(param)
        }
      )
  }

}
