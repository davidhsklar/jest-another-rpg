const Enemy = require('../lib/Enemy');
const Potion = require('../lib/Potion');

jest.mock('../lib/_mocks_/Potion');

test('creates an enemy object', () => {
  const enemy = new Enemy('goblin', 'sword');
});

  test("gets enemy's health value", () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
  });
  
  test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.isAlive()).toBeTruthy();
  
    enemy.health = 0;
  
    expect(enemy.isAlive()).toBeFalsy();
  });
  
  test("gets enemy's attack value", () => {
    const enemy = new Enemy('goblin', 'sword');
    enemy.strength = 10;
  
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
  });
  
  test("subtracts from enemy's health", () => {
    const enemy = new Enemy('goblin', 'sword');
    const oldHealth = enemy.health;
  
    enemy.reduceHealth(5);
  
    expect(enemy.health).toBe(oldHealth - 5);
  
    enemy.reduceHealth(99999);
  
    expect(enemy.health).toBe(0);
  });

  test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'dagger');
  
    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));

    expect(Object.is(enemy, 'dagger')).toBe(false);
  });