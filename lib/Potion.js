function Potion(name) {
    this.types = ['health', 'strength', 'agility']
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if(this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.flooe(Math.random() * 5 + 7);
    }

}

module.exports = Potion;