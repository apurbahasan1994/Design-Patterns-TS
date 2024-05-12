// Used to created objects of simillar type but varies a 
// simple in implimentation
// Hides the complexity of creating such objects


// Example 1 : 

abstract class Car {
    constructor(public model: string, public productionYear: number) {
    }
    abstract displayCarnfo(): void;
}

class Sedan extends Car {
    displayCarnfo(): void {
        console.log('This is a sedan', this.model, this.productionYear);
    }
}
class Suv extends Car {
    displayCarnfo(): void {
        console.log('This is a suv', this.model, this.productionYear);
    }
}

class CarFactory {
    createCar(type: 'SUV' | 'SEDAN', model: string, productionYear: number) {
        switch (type) {
            case 'SUV':
                const suv = new Suv(model, productionYear);
                return suv;
            case 'SEDAN':
                const sedan = new Sedan(model, productionYear);
            default:
                throw new Error('Invalid car type');
        }
    }
}

const factory = new CarFactory();
const myCar: Car = factory.createCar('SUV', '1001', 2014);
myCar.displayCarnfo()