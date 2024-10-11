/* This pattern is used to seperte an abstraction form its implementation 
so that both can be modified independently This pattern involves an interface 
which acts as a bridge between the abstraction class and implementer classes With
Bridge pattern both types of classes can be modified withput affecting to each other

When to use: 
1.We need to avoid a permanent binding between an abstraction and its implementation
2.Both abstractions and their implementation should be extensible
3.No impact on clinets 
4.We need to share an implementation among multiple objects
5.We need to hide the implementation of an abstraction completely from clients
 */
interface Color {
    applyColor(): void;
  }
  interface Shape {
    draw(): void;
    setColor(color: Color): void;
  }
  class RedColor implements Color {
    applyColor() {
      console.log("Applying red color");
    }
  }
  class BlueColor implements Color {
    applyColor() {
      console.log("Applying blue color");
    }
  }
  class Circle implements Shape {
    constructor(private color: Color) {}
    draw() {
      console.log("Drawing Circle");
      this.color.applyColor();
    }
    setColor(color: Color) {
      this.color = color;
    }
  }
  class Square implements Shape {
    constructor(private color: Color) {}
    draw() {
      console.log("Drawing Square");
      this.color.applyColor();
    }
    setColor(color: Color) {
      this.color = color;
    }
  }
  // Create shapes with different colors
  const redCircle = new Circle(new RedColor());
  redCircle.draw();
  const blueSquare = new Square(new BlueColor());
  blueSquare.draw();
  // Change color dynamically
  blueSquare.setColor(new RedColor());
  blueSquare.draw();
  //another example
  interface IPaymentSystem {
    processPayment(paymentSystem: string): void;
  }
  abstract class Payment {
    public _iPaymentSystem: IPaymentSystem;
    abstract makePayment(): void;
  }
  class CitiBankPaymentSystem implements IPaymentSystem {
    processPayment(paymentSystem: string): void {
      console.log("payment with city bank");
    }
  }
  class DhakaBankPaymentSystem implements IPaymentSystem {
    processPayment(paymentSystem: string): void {
      console.log("payment with city dhaka bank");
    }
  }
  class CardPayment extends Payment {
    makePayment(): void {
      this._iPaymentSystem.processPayment("Card payment");
    }
  }
  class NetPayment extends Payment {
    makePayment(): void {
      this._iPaymentSystem.processPayment("Net banking payment");
    }
  }
  //client
  const main = () => {
    const order: Payment = new CardPayment();
    order._iPaymentSystem = new CitiBankPaymentSystem();
    order.makePayment();
  };
  