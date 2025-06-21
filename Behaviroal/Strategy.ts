// Change behavior at runtime of an object instead changing its implementation.

// strategy pattern allows you to define a family of algorithms,
//  encapsulate each one, and make them interchangeable. The strategy 
// lets the algorithm vary independently from clients that use it.
// This is useful when you have multiple ways to perform an operation,
//  and you want to choose the method at runtime without changing the code that uses it.
// Example: Payment processing in a shopping cart system where you can 
// switch between different payment methods like Credit Card, PayPal, etc.
// Example: Shopping Cart with Payment Strategies   

//When to use Strategy Pattern:
// 1. When you have multiple algorithms or behaviors that can be applied to an object.
// 2. When you want to switch between different algorithms at runtime.
// 3. When you want to avoid using conditional statements to select an algorithm.
// 4. When you want to encapsulate algorithms in separate classes to promote code reuse and
//    maintainability.
// 5. When you want to define a family of algorithms, encapsulate each one,
//  and make them interchangeable.

// this is the strategy
interface PaymentStrategy {
    pay(amount: number): void;
}

// These are concrete strategies
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

// this is context
// The context is the class that uses the strategy. It holds a reference to a strategy 
// object and delegates the payment processing to it. The context can change the strategy 
// at runtime, allowing for flexible behavior without modifying its own code.
// In this case, the ShoppingCart class acts as the context that uses different
//  payment strategies to process payments. The context can switch between different 
// payment methods (strategies) without needing to change its
class ShoppingCart {
    private paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

const cart = new ShoppingCart(new CreditCardPayment());
cart.checkout(100); // Paid 100 using Credit Card.
cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(200); // Paid 200 using PayPal.
cart.setPaymentStrategy(new CreditCardPayment());
cart.checkout(300); // Paid 300 using Credit Card.
cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(400); // Paid 400 using PayPal.
cart.setPaymentStrategy(new CreditCardPayment());
cart.checkout(500); // Paid 500 using Credit Card.
cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(600); // Paid 600 using PayPal.
cart.setPaymentStrategy(new CreditCardPayment());
