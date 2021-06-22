const Potion = require('../lib/potion');

function Player(name = '') {
    this.name = name;

    this.inventory = [new Potion('health'), new Potion()];
    this.health = Math.floor(Math.random() * 10 + 95);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.strength = Math.floor(Math.random() * 5 + 7);
}

module.exports = Player;