import { Character } from "./Character.js"

export class Mage extends Character {
  constructor(name, life, attack, defense, power) {
    this.power = power
    super(name, life, attack, defense)
  }

  attack(target) {
    target.life -= this.attack  + power - target.defense
    return console.log(`${this.name} attacks. The ${target} lost ${target.life - this.attack} point of life`);
  }
  heal(target) {
    target.life += (power * 2)
  }
}