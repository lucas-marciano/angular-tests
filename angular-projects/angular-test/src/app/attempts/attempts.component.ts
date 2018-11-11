import { Component, OnInit, OnChanges, Input } from '@angular/core'
import { Hearth } from '../shared/hearth.model'

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {
  @Input() public attempts

  public hearths: Array<Hearth> = [
    new Hearth(true),
    new Hearth(true),
    new Hearth(true)
  ]

  ngOnChanges(){
    if(this.attempts !== this.hearths.length){
      let indice = (this.hearths.length - this.attempts) - 1
      this.hearths[indice].fullHearth = false
    }
  }

  ngOnInit() {
  }

}
