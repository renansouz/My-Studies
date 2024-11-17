const Character = require("./Character")

class Mage extends Character {
  constructor(name, lifePts, attackPts, defensePts, power) {
    super(name, lifePts, attackPts, defensePts)
    this.power = power
  }

  attack(target) {
    target.lifePts -= (this.attackPts  + power) - target.defensePts
  }
  heal(target) {
    target.lifePts += power * 2
  }
}

module.exports = Mage