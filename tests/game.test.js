'use strict';

const Game = require('../src/game');

describe('Game', () => {
  describe('Defaults', () => {
    test('Game is not over by default', () => {
      const game = new Game();

      expect(game.isOver).toBe(false);
    });

    test('Game does not have a winner by default', () => {
      const game = new Game();

      expect(game.winner).toBe(null);
    });

    test('X is the first player', () => {
      const game = new Game();

      expect(game.nextPlayer).toBe('X');
    });
  });
});