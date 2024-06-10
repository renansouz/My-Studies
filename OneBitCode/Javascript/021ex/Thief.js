import { Character } from "./Character.js"

export class Thief extends Character {
  constructor(name, life, attack, defense) {
    super(name, life, attack, defense)
  }

  attack(target) {
    target.life -= this.attack * 2 - target.defense
    return console.log(`${this.name} attacks. The ${target} lost ${target.life - this.attack} point of life`);
  }
}