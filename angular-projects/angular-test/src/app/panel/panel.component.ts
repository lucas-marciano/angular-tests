import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/Frase.model';
import { FRASES } from './Frase-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instruction: String = 'Translate the frase';

  constructor() {
    console.log(this.frases);
  }

  ngOnInit() {
  }

}
