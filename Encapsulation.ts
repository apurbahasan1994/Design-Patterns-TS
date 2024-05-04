// Hiding properties and methods

class BankAccount {
    private _balance;
    private _accountNumber;

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value < 0) {
            throw new Error('You can not pass a negative balance');
        }
        this._balance = value;
    }

    public withdwar() {
    }

    public deposit() {

    }
}