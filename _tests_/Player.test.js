const { test, expect, jest } = require('@jest/globals');
const potion = require('../lib/potion.js');
jest.mock('../lib/potion.js');
//console.log(new potion());
const Player = require('../lib/player.js');
const potion = require('../lib/_mocks_/potion.js');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );

});