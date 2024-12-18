const BankAccount = (function () {
  let balance = 0;

  return {
    deposit: function (amount) {
      console.log(`Make a deposit of $${amount}`);
      balance += amount;
      this.checkBalance();
    },
    withdraw: function (amount) {
      if (amount < balance) {
        console.log(`Make a withdraw of $${amount}`);
        balance -= amount;
        this.checkBalance();
      } else {
        console.log("Monto insuficiente.");
      }
    },
    checkBalance: function () {
      console.log(`Balance: $${balance}.-`);
    },
  };
})();

BankAccount.checkBalance();
BankAccount.deposit(100);
BankAccount.withdraw(50);
BankAccount.withdraw(100);
BankAccount.checkBalance();
