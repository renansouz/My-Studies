export class Character {
  constructor(name, life, attack, defense) {
    this.name = name
    this.life = life
    this.attack = attack
    this.defense = defense
  }

  attack(target) {
    target.life -= this.attack
    return console.log(`${this.name} attacks. The ${target} lost ${target.life - this.attack} point of life`);
  }
}