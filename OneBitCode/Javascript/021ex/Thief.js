const Character = require("./Character")

class Thief extends Character {
  attack(target) {
    target.life -= (this.attack - target.defense)  * 2 
  }
}

module.exports = Thief