// Provides an interface for creating families of related 
// or descendant objects without specifying the their concrete
// class.

// Almost simillar to factory but adds another layer of
// abstraction over factory pattern. Abstract factory
// pattern works around super-facotry which creates
// other factories.

/* 
  It says that just define an interface or abs class for 
  creating families of related or dependent objects but 
  without their concrete sub-classes.
  That means abs factory lets a class returns a factory

*/



// -------- exp 1 -----------


// Abstract Product A: BankAccount
interface BankAccount {
    accountType: string;
    getInterestRate(): number;
}

// Concrete Product A1: SavingsAccount
class SavingsAccount implements BankAccount {
    accountType = "Savings Account";
    getInterestRate(): number {
        return 0.05; // 5% interest rate for savings account
    }
}

// Concrete Product A2: CheckingAccount
class CheckingAccount implements BankAccount {
    accountType = "Checking Account";
    getInterestRate(): number {
        return 0.01; // 1% interest rate for checking account
    }
}

// Abstract Product B: Loan
interface Loan {
    loanType: string;
    getInterestRate(): number;
}

// Concrete Product B1: PersonalLoan
class PersonalLoan implements Loan {
    loanType = "Personal Loan";
    getInterestRate(): number {
        return 0.08; // 8% interest rate for personal loan
    }
}

// Concrete Product B2: HomeLoan
class HomeLoan implements Loan {
    loanType = "Home Loan";
    getInterestRate(): number {
        return 0.06; // 6% interest rate for home loan
    }
}

// Abstract Factory: BankFactory
interface BankFactory {
    createBankAccount(): BankAccount;
    createLoan(): Loan;
}

// Concrete Factory 1: LocalBankFactory
class LocalBankFactory implements BankFactory {
    createBankAccount(): BankAccount {
        return new SavingsAccount(); // Local banks offer savings accounts by default
    }

    createLoan(): Loan {
        return new PersonalLoan(); // Local banks offer personal loans by default
    }
}

// Concrete Factory 2: InternationalBankFactory
class InternationalBankFactory implements BankFactory {
    createBankAccount(): BankAccount {
        return new CheckingAccount(); // International banks offer checking accounts by default
    }

    createLoan(): Loan {
        return new HomeLoan(); // International banks offer home loans by default
    }
}

// Client
function main() {
    // Create a local bank
    const localBankFactory: BankFactory = new LocalBankFactory();
    const localBankAccount: BankAccount = localBankFactory.createBankAccount();
    const localLoan: Loan = localBankFactory.createLoan();

    console.log("Local Bank Account Type:", localBankAccount.accountType);
    console.log("Local Bank Account Interest Rate:", localBankAccount.getInterestRate());
    console.log("Local Loan Type:", localLoan.loanType);
    console.log("Local Loan Interest Rate:", localLoan.getInterestRate());

    // Create an international bank
    const internationalBankFactory: BankFactory = new InternationalBankFactory();
    const internationalBankAccount: BankAccount = internationalBankFactory.createBankAccount();
    const internationalLoan: Loan = internationalBankFactory.createLoan();

    console.log("\nInternational Bank Account Type:", internationalBankAccount.accountType);
    console.log("International Bank Account Interest Rate:", internationalBankAccount.getInterestRate());
    console.log("International Loan Type:", internationalLoan.loanType);
    console.log("International Loan Interest Rate:", internationalLoan.getInterestRate());
}

// Run the client code
main();