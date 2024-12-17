const vehiclePrototype = {
  start() {
    console.log(`The ${this.type} is starting`);
  },
  stop() {
    console.log(`The ${this.type} is stoping`);
  },
};

function createVehicle(type) {
  const vehicle = Object.create(vehiclePrototype);
  vehicle.type = type;
  return vehicle;
}

const coche = createVehicle("car");
coche.start();
coche.stop();

const bicicleta = createVehicle("bike");
bicicleta.start();
bicicleta.stop();
