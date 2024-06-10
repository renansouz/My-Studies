import { Character } from "./Character.js"

export class Warrior extends Character {
  constructor(name, life, attack, defense, shield) {
    super(name, life, attack, defense)
    this.shield = shield
    this.position = true
  }

  changePosition() {
      this.position = !this.position
  }
  attack(target) {
    if(this.position)
    target.life -= this.attack * 2 - target.defense
    return console.log(`${this.name} attacks. The ${target} lost ${target.life - this.attack} point of life`);
  } 

  defense(target) {
    this.defense += this.shield
  }
}