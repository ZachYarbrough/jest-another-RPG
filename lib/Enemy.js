const Character = require('../lib/Character');
const Potion = require("../lib/Potion");

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  }

  getDescription () {
      return `A ${this.name} has appeared holding a ${this.weapon}!`
  }
}

module.exports = Enemy;