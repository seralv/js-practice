const CounterModule = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(`Counter: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Counter: ${count}`);
    },
    reset: function () {
      count = 0;
      console.log("Counter reseted");
    },
  };
})();

CounterModule.increment();
CounterModule.increment();
CounterModule.decrement();
CounterModule.reset();
