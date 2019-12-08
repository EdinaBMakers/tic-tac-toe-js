'use strict';

const Game = require('../src/game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('Defaults', () => {
    test('Game is not over by default', () => {
      expect(game.isOver).toBe(false);
    });

    test('Game does not have a winner by default', () => {
      expect(game.winner).toBe(null);
    });

    test('X is the first player', () => {
      expect(game.nextPlayer).toBe('X');
    });

    test('Board is empty by default', () => {
      expect(game.board).toStrictEqual([null, null, null, null, null, null, null, null, null]);
    });
  });

  describe('Claim field', () => {
    test('A field can be claimed', () => {
      game.claimField(0);

      expect(game.board).toStrictEqual(['X', null, null, null, null, null, null, null, null])
    });

    test('Any field can be claimed', () => {
      game.claimField(1);

      expect(game.board).toStrictEqual([null, 'X', null, null, null, null, null, null, null])
    });

    test('Claiming field is switching player', () => {
      game.claimField(0);

      expect(game.nextPlayer).toBe('O');

      game.claimField(1);

      expect(game.nextPlayer).toBe('X');
    });
  });
});