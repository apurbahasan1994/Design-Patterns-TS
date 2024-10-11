/* 

Is a structural design pattern that allows dynamically add or override behaviour in an
existing object without changing its imlementation.

Component : This is the base interface or abstract class, which defines the methods that will be
implemented
ConcreteComponent : This is a class which implements the component interface

Decorator : This is also an interface or an abstract class which implemnets the component
interface
ConcereteDecorator: This is a class which implements the Decorator. It extends the decorator 
to decorate the component


*/

interface Coffe {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffe {
    cost(): number {
        return 10;
    }
    description(): string {
        return 'this is description';
    }

}

abstract class CoffeDecorator implements Coffe {
    constructor(protected coffe: Coffe) { }
    abstract cost(): number;
    abstract description(): string;

}

class MilkDecorator extends CoffeDecorator {
    cost(): number {
        return this.coffe.cost();
    }
    description(): string {
        return `${this.coffe.description()}, with milk`;
    }
    constructor(protected coffe: Coffe) {
        super(coffe);
    }
}

let coffe : Coffe = new SimpleCoffee();
coffe = new MilkDecorator(coffe);