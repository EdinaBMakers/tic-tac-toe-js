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

    for (let i = 0; i < this.board.length; i++) {
      if (this._isEmpty(i)) {
        return;
      }
    }

    this.isOver = true;
  }

  _switchPlayer() {
    this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X';
  }

  _isEmpty(index) {
    return this.board[index] == null;
  }
}

module.exports = Game;