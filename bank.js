const BankAccount = (function () {
  let balance = 0;

  return {
    deposit: function (amount) {
      balance += amount;
      this.checkBalance();
    },
    withdraw: function (amount) {
      balance -= amount;
      this.checkBalance();
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
