import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  player1: any;
  player2: any;

  player1Move = [];
  player2Move = [];

  ngOnInit() {

  }

  ResetBoard() {

  }
}
