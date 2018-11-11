import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() public endGame: EventEmitter<string> = new EventEmitter()

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
      if(this.checkEndGame()){
        this.endGame.emit('victory')      
      }
      this.updateActualFrase();
    } else {
      // this.showResponse('Wrong translate!');
      this.attempts--
      if(this.attempts === -1){
        this.endGame.emit('lose') 
      }
    }
    this.response = '';
  }

  private updateProgressBar(): void {
    this.attempt++;
    this.progress = this.progress + this.progressPorcent;
  }

  private checkEndGame(): boolean{
    return this.attempt === this.frases.length
  }

  private updateActualFrase(): void {
    if (this.frases.length > this.attempt) {
      this.frase = this.frases[this.attempt];
    }
  }

  private showResponse(message: string): void {
    alert(message);
  }

}
