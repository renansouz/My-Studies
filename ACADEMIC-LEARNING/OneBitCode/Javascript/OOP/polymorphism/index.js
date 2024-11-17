class Vehicle {
  move() {
    console.log("the vehicle is moving.");
  }
}

class Car extends Vehicle {
  move() {
    console.log("the car is moving");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("the ship is browsing");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`the aircraft is flying ${speed} KM/h`);
  }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

delorean.move()
blackPearl.move()
epoch.move(39)

function start(vehicle) {
  console.log("starting a vehicle...")
  vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoch)