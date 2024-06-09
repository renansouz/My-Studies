class Charact {
  constructor(name, life, attack, defense, target) {
    this.name = name
    this.life = life
    this.attack = attack
    this.defense = defense
    this.target = target
  }

  attack(target) {
    return target.life - this.attack
  }
}