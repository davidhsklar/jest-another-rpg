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