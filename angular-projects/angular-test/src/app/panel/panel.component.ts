import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instruction: string = 'Translate the frase'
  public response: string = ''
  public attempt: number = 0
  public frase: Frase
  public progress: number = 0
  public attempts: number = 3
  private progressPorcent: number = 0

  constructor() {
	  this.updateActualFrase();
	  this.progressPorcent = 100 / this.frases.length;
  }

  ngOnInit() {
  }

  public updateResponse(response: Event): void {
    this.response = (<HTMLInputElement>response.target).value;
  }

  public checkResponse(): void {
    if (this.frase.frasePtBr.toUpperCase() === this.response.toUpperCase()) {
      this.updateProgressBar();
      this.showResponse('Greate!');
    } else {
      this.showResponse('Wrong translate!');
      this.attempts--
      if(this.attempts === -1)
        this.showResponse('You lose!')
    }
    this.response = '';
  }

  private updateProgressBar(): void {
    this.attempt++;
    this.progress = this.progress + this.progressPorcent;
    if (this.frases.length > this.attempt) {
      this.updateActualFrase();
    }
  }

  private updateActualFrase(): void {
    this.frase = this.frases[this.attempt];
  }

  private showResponse(message: string): void {
    alert(message);
  }

}
