'use strict';

class Game {
  constructor() {
    this.isOver = false;
    this.winner = null;
    this.nextPlayer = 'X';
    this.board = [null, null, null, null, null, null, null, null, null];
  }

  claimField(index) {
    this.board[index] = this.nextPlayer;
    this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X';
  }
}

module.exports = Game;