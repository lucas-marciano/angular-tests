import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public goOnGame = true
  public winGame: string
  
  public endGame(type: string): void{
    this.goOnGame = false
    this.winGame = type
  }

  public resetGame(): void{
    this.goOnGame = true
    this.winGame = undefined
  }

}
