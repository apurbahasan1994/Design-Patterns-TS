// Hiding implemmetation details and exposing only essential features


// Shapes (Cirlce, Rectange)
// calculate area and permimeter for shapes
// simple - single function calculateArea (calculate area for any shapes)



// interface for shape

interface Shape {
    area(): number;
    perimeter(): number;
}


class Cirlce implements Shape {
    constructor(private radius: number) { }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return Math.PI * this.radius;
    }
}

class Rectangel implements Shape {
    constructor(private width: number, private height: number) { }
    area(): number {
        return this.height * this.width;
    }
    perimeter(): number {
        return 2 * (this.width + this.height)
    }

}


abstract class Phone {
    abstract call(): void;
    abstract receiveCall(): void;
    abstract makeACall(): void;
}

class IPhone extends Phone {
    call(): void {
        console.log('calling')
    }
    receiveCall(): void {
        console.log('receving')
    }
    makeACall(): void {
        console.log('making a call')
    }

}

class LavaPhone extends Phone {
    call(): void {
        console.log('calling')
    }
    receiveCall(): void {
        console.log('receving')
    }
    makeACall(): void {
        console.log('making a call')
    }

}

class PhoneRepairShop {
    repairAnyPhone(phone: Phone) {
        // make all the changes and then
        phone.call();
    }
}