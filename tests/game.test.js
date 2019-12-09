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

      expect(game.board).toStrictEqual([null, 'X', null, null, null, null, null, null, null]);
    });

    test('Claiming field is switching player', () => {
      game.claimField(0);

      expect(game.nextPlayer).toBe('O');

      game.claimField(1);

      expect(game.nextPlayer).toBe('X');
    });

    test('Claiming field is populating board correctly', () => {
      game.claimField(0);
      game.claimField(1);

      expect(game.board).toStrictEqual(['X', 'O', null, null, null, null, null, null, null]);
    });

    test('It does not change the player when claiming non empty field', () => {
      game.claimField(0);

      expect(game.nextPlayer).toBe('O');

      game.claimField(0);

      expect(game.nextPlayer).toBe('O');
    });

    test('It does not change the board when claiming non empty field', () => {
      game.claimField(0);
      game.claimField(0);

      expect(game.board).toStrictEqual(['X', null, null, null, null, null, null, null, null]);
    });
  });

  describe('Game over', () => {
    test('Game is over if all fields are claimed and no one is winning', () => {
      game.claimField(0);
      game.claimField(1);
      game.claimField(2);
      game.claimField(5);
      game.claimField(3);
      game.claimField(6);
      game.claimField(4);
      game.claimField(8);
      game.claimField(7);

      expect(game.isOver).toBe(true);
    });

    test('Game is over if it has a winner', () => {
      game.claimField(0);
      game.claimField(3);
      game.claimField(1);
      game.claimField(4);
      game.claimField(2);

      expect(game.isOver).toBe(true);
    });
  });
});