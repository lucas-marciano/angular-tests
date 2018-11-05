import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  public emptyImage = '/assets/coracao_vazio.png';
  public fullImage = '/assets/coracao_cheio.png';

  constructor() { }

  ngOnInit() {
  }

}
