const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('David');

    expect(player.name).toBe('David');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );
});

test("gets player's health value", () => {
    const player = new Player('David');
  
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
  });


test('checks if player is alive or not', () => {
    const player = new Player ('David');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});