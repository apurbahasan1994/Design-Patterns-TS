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


// another example :

class ImageStorage {
    private storageStrategy: StorageStrategy;

    constructor(storageStrategy: StorageStrategy) {
        this.storageStrategy = storageStrategy;
    }

    setStorageStrategy(storageStrategy: StorageStrategy): void {
        this.storageStrategy = storageStrategy;
    }

    storeImage(image: string): void {
        this.storageStrategy.store(image);
    }
}

// Strategy interface
interface StorageStrategy {
    store(image: string): void;
}

// intrface Imagefiter
interface ImageFilter {
    apply(image: string): string;
}
// Concrete filters
class GrayscaleFilter implements ImageFilter {
    apply(image: string): string {
        return `Applying grayscale filter to ${image}`;
    }
}
class SepiaFilter implements ImageFilter {
    apply(image: string): string {
        return `Applying sepia filter to ${image}`;
    }
}
class BlurFilter implements ImageFilter {
    apply(image: string): string {
        return `Applying blur filter to ${image}`;
    }
}

// image processing context
class ImageProcessor {
    private filter: ImageFilter;
    constructor(filter: ImageFilter) {
        this.filter = filter;
    }
    setFilter(filter: ImageFilter): void {
        this.filter = filter;
    }
    processImage(image: string): void {
        const result = this.filter.apply(image);
        console.log(result);
    }
}

// Concrete strategies
class LocalStorage implements StorageStrategy {
    store(image: string): void {
        console.log(`Storing image "${image}" in local storage.`);
    }
}
class CloudStorage implements StorageStrategy {
    store(image: string): void {
        console.log(`Storing image "${image}" in cloud storage.`);
    }
}
// Usage
const imageStorage = new ImageStorage(new LocalStorage());
imageStorage.storeImage("photo.jpg"); // Storing image "photo.jpg" in local storage.
imageStorage.setStorageStrategy(new CloudStorage());
imageStorage.storeImage("photo.jpg"); // Storing image "photo.jpg" in cloud storage

// Example usage
const imageProcessor = new ImageProcessor(new GrayscaleFilter());
imageProcessor.processImage("photo.jpg"); // Applying grayscale filter to photo.jpg
imageProcessor.setFilter(new SepiaFilter());
imageProcessor.processImage("photo.jpg"); // Applying sepia filter to photo.jpg


// ...existing code...

class ImageManager {
    private storageStrategy: StorageStrategy;
    private filter: ImageFilter;

    constructor(storageStrategy: StorageStrategy, filter: ImageFilter) {
        this.storageStrategy = storageStrategy;
        this.filter = filter;
    }

    setStorageStrategy(storageStrategy: StorageStrategy): void {
        this.storageStrategy = storageStrategy;
    }

    setFilter(filter: ImageFilter): void {
        this.filter = filter;
    }

    processAndStore(image: string): void {
        const processedImage = this.filter.apply(image);
        console.log(processedImage);
        this.storageStrategy.store(image);
    }
}

// Usage
const imageManager = new ImageManager(new LocalStorage(), new GrayscaleFilter());
imageManager.processAndStore("photo.jpg"); // Applying grayscale filter to photo.jpg, then storing in local storage

imageManager.setFilter(new SepiaFilter());
imageManager.setStorageStrategy(new CloudStorage());
imageManager.processAndStore("photo.jpg"); // Applying sepia filter to photo.jpg, then storing in cloud storage