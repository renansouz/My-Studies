const Character = require("./Character")

class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts)
    this.shieldPts = shieldPts
    this.attacking = true
  }

  changePosition() {
    if (this.attacking){
      this.attacking = false
      this.defensePts += this.shieldPts
    } else {
      this.attacking = this.attacking
      this.defensePts -= this.shieldPts
    }
      
  }
  attackPts(target) {
    if(this.attacking){
      super.attack(target)
    }
  } 

  defensePts() {
    if(!this.attacking){
      this.defensePts += this.shieldPts
    }
  }
}

module.exports = Warrior