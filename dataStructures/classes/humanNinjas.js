class Human {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.mana = 100;
    this.attack = 10;
    this.speed = 10;
  }

  getName() {
    return `I am ${this.name}`;
  }
}

class Ninja extends Human {
  constructor (name) {
    super(name);
    this.stealth = 50;
  }

  getName() {
    return `I am the great ninja ${this.name} with stealth ${this.stealth}`;
  }
}

let erick = new Human('erick');
console.log(erick.getName());

let bob = new Ninja('asdf');
console.log(bob.getName());
