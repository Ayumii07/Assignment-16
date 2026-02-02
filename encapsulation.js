class BankAccount {
    #balance; // private property
    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }
    getBalance() {
        console.log("Balance:", this.#balance);
    }
}
let account = new BankAccount(2000);
account.deposit(800);
account.withdraw(300);
account.getBalance();
// account.#balance  Not accessible
//Encapsulation is the process of binding data and methods together and restricting direct access to the data
//Data hiding is important because it protects data, improves security, and allows controlled access to object data.