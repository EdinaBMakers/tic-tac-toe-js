'use strict';

class Game {
  constructor() {
    this.isOver = false;
    this.winner = null;
    this.nextPlayer = 'X';
    this.board = [null, null, null, null, null, null, null, null, null];
  }

  claimField(index) {
    if (this._isEmpty(index)) {
      this.board[index] = this.nextPlayer;
      this._switchPlayer();
    }
  }

  _switchPlayer() {
    this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X';
  }

  _isEmpty(index) {
    return this.board[index] == null;
  }
}

module.exports = Game;