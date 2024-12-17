const animal = {
  species: "animal",
  eat() {
    console.log("The animal is eating");
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!, Woof!");
};

const chapi = Object.create(dog);
chapi.custome = function () {
  console.log("Me rasco por las pulgas");
};

console.log(`dog species: ${dog.species}`);
dog.eat();
dog.bark();

console.log(`chapi species: ${chapi.species}`);
chapi.eat();
chapi.bark();
chapi.custome();
