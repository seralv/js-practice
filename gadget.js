const gadgetPrototype = {
  turnOn() {
    if (this.battery === 0) {
      console.log(
        `The ${this.name} can't turn on because the battery is ${this.battery}%.`,
      );
    } else {
      console.log(`The ${this.name} is now ON.`);
    }
  },
  showBrand() {
    console.log(`The gadget is made by ${this.brand}.`);
  },
  checkBattery() {
    if (this.battery === 0) {
      console.log(`The ${this.name} is now OFF, because the battery is empty.`);
    } else {
      console.log(`The battery is ${this.battery}% available.`);
    }
  },
  chargeBattery(charge) {
    if (this.battery < 100) {
      console.log(`The ${this.name} battery is charging...`);
      if (charge > 0 && charge < 100) {
        this.battery += charge;
        if (this.battery > 100) {
          this.battery = 100;
        }
      } else {
        console.log("The charge need to be between 1 and 100.");
      }
    } else {
      console.log("The battery is full, no need charge.");
    }
  },
};

function createGadget(name, brand, battery) {
  const gadget = Object.create(gadgetPrototype);
  gadget.name = name;
  gadget.brand = brand;
  gadget.battery = battery;
  // gadget.charge = charge;
  return gadget;
}

const gadget1 = createGadget("phone", "Apple", 0);
const gadget2 = createGadget("tablet", "Samsung", 85);

gadget1.turnOn();
gadget1.showBrand();
gadget1.checkBattery();
gadget1.chargeBattery(50);
gadget1.checkBattery();
console.log("--------------------------");
gadget2.turnOn();
gadget2.showBrand();
gadget2.checkBattery();
gadget2.chargeBattery(30);
gadget2.checkBattery();
