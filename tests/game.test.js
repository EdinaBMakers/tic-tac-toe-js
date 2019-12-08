'use strict';

const Game = require('../src/game');

describe('Game', () => {
  describe('Defaults', () => {
    test('Game is not over by default', () => {
      const game = new Game();

      expect(game.isOver).toBe(false);
    });
  });
});