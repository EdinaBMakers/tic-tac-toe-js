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

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.board[a];
        this.isOver = true;
        return;
      }
    }

    if (!this._hasEmptyField()) {
      this.isOver = true;
    }
  }

  _switchPlayer() {
    this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X';
  }

  _isEmpty(index) {
    return this.board[index] == null;
  }

  _hasEmptyField() {
    for (let i = 0; i < this.board.length; i++) {
      if (this._isEmpty(i)) {
        return true;
      }
    }

    return false;
  }
}

module.exports = Game;