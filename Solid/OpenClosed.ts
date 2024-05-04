// Software entities(classes,modules,functions,etc)
// should be open for extension but closed for modification

class PaymentProcessorV1 {
    processPayment(amount: number) {
        console.log('processing using creadit card');
    }
}

// suppose there is a situation comes where
// the client asked for payment with another
// payment type like paypal

// so in this case

enum PaymentType {
    MASTER_CARD,
    PAYPAL,
    CREDIT_CARD
}
class PaymentProcessorV2 {
    processPayment(amount: number, paymentType: PaymentType) {
        if (paymentType === PaymentType.CREDIT_CARD) {
            console.log('payment with credit card');
        }
        if (paymentType === PaymentType.MASTER_CARD) {
            console.log('payment with master card');
        }
        if (paymentType === PaymentType.PAYPAL) {
            console.log('payment with paypal');
        }
    }
}

// so we are doing mutiple if else, and everytime 
// client wants another payment type we are just 
// modifying the class

// We can work like this

interface IPaymentProcessor {
    processPayment(anount: number);
}

class PayPalProcessor implements IPaymentProcessor {
    processPayment(anount: number) {

    }
}

class CreditCardProcessor implements IPaymentProcessor {
    processPayment(anount: number) {

    }
}

class MasterCardProcessor implements IPaymentProcessor {
    processPayment(anount: number) {

    }
}

class PaymentProcessorV3 {
    processor: IPaymentProcessor;
    constructor(paymentProcessor: IPaymentProcessor) {
        this.processor = paymentProcessor;
    }
    processPayment(amount: number) {
        this.processor.processPayment(amount);
    }
}

const paymentProcessor = new PaymentProcessorV3(new CreditCardProcessor());
paymentProcessor.processPayment(100);