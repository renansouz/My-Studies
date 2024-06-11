class Character {
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name
    this.lifePts = lifePts
    this.attackPts = attackPts
    this.defensePts = defensePts
  }

  attack(target) {
    target.lifePts -= this.attackPts - this.defensePts
  }
}

module.exports = Character