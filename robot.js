const robotPrototype = {
  greet() {
    console.log(`Hello, I am ${this.name}, a ${this.type} robot.`);
  },
  checkEnergy() {
    console.log(`My energy level is at ${this.energy}%.`);
  },
  rechargeEnergy(charge) {
    if (this.energy < 100) {
      console.log(`The ${this.name} energy is charging...`);
      if (charge > 0 && charge < 100) {
        this.energy += charge;
        if (this.energy > 100) {
          this.energy = 100;
        }
      } else {
        console.log("The charge need to be between 1 and 100.");
      }
    } else {
      console.log("Energy is already full!");
    }
  },
  work(hours) {
    const energyConsumed = hours * 10;
    if (this.energy >= energyConsumed) {
      this.energy -= energyConsumed;
      console.log(
        `${this.name} worked for ${hours} hours. Energy left: ${this.energy}%.`,
      );
    } else {
      console.log(
        `${this.name} doesn't have enough energy to work for ${hours} hours.`,
      );
    }
  },
};

function createRobot(name, type, energy) {
  const robot = Object.create(robotPrototype);
  robot.name = name;
  robot.type = type;
  robot.energy = Math.max(0, Math.min(energy, 100));
  return robot;
}

const robot1 = createRobot("R2-D2", "Cleaning", 50);
const robot2 = createRobot("C-3PO", "Assistant", 100);

console.log(`------- ${robot1.name} process -------`);
robot1.greet();
robot1.checkEnergy();
robot1.rechargeEnergy(25);
robot1.checkEnergy();
robot1.work(10);
robot1.checkEnergy();
console.log();
console.log(`------- ${robot2.name} process -------`);
robot2.greet();
robot2.checkEnergy();
robot2.rechargeEnergy(10);
robot2.checkEnergy();
robot2.work(10);
robot2.checkEnergy();
