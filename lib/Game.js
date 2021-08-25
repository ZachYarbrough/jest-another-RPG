const inquirer = require('inquirer');
const Enemy = require('../lib/Enemy');
const Player = require('../lib/Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'dagger'));
    this.enemies.push(new Enemy('orc', 'club'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

    this.currentEnemy = this.enemies[0];

    inquirer.prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    }).then(({ name }) => {
        this.player = new Player(name);

        this.startNewBattle();
    });
};

Game.prototype.startNewBattle = function() {
    
}

module.exports = Game;