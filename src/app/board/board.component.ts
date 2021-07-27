import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  blocks: any;
  xIsNext: boolean;
  winner: any;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.blocks = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  move(idx: number) {
    if (!this.blocks[idx]) {
      this.blocks.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.blocks[a] &&
        this.blocks[a] === this.blocks[b] &&
        this.blocks[a] === this.blocks[c]
      ) {
        return this.blocks[a];
      }
    }
    return null;
  }
}
