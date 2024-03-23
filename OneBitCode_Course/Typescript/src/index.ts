function sendSpaceship(name:string, captain:string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission:true,
    crew:[]
  }
  
  alert(`The ship ${spaceship.name} commanded by captain ${spaceship.captain} has been sent on a mission`)

  return spaceship
}

  function accelerate (targetSpeed: number, spaceship: { name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
      alert(`Reducing the speed of ${spaceship.name} to ${targetSpeed}...`)
    }else if (spaceship.speed < targetSpeed) {
      alert(`Increasing the speed of ${spaceship.name} to ${targetSpeed}...`)
    } else {
      alert(`Maintaining the speed of ${spaceship.name}...`)
    }
  }


const spaceship = prompt(`Enter the name of the spaceship to be sent.`)
const spaceshipCaptain = prompt(`Eenter the name of the spaceship's captain.`)

const currentShip = sendSpaceship(spaceship, spaceshipCaptain)

const speed = Number(prompt(`Enter the name of the spaceship's captain.`))

accelerate(speed, currentShip)