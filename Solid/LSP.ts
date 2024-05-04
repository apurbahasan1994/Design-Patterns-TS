// Parent class in a program  can be replaced by the child
// class without altering the desirable properties of that
// program. (Child class can be used for Parent class without
//    breaking the program)



class Bird {
    fly() {
        console.log('Birds fly')
    }
    makeSound() {
        console.log('bird making sound')
    }
}



class Parrot extends Bird {
    fly(): void {
        console.log('Parrot fly');
    }
    makeSound(): void {
        console.log('Parrot fly')
    }
}


class Penguin extends Bird {
    // penguin cant fly
    fly(): void {
        throw new Error('Penguin cant fly')
    }
}


function makeBirdFly(bird: Bird) {
    bird.fly();
}


makeBirdFly(new Penguin()) // this will break the program

// So when we are designing our classes we should keep it 
// in our mind that sub classes should be aligned with
// the parent class.
// If a child class overrides methods of the parent class
// than child class should be aligned the methods of the 
// parent class, there should not be scenrario like
// throwing errors.

// How to solve the issue.


class BaseBird {
    makeSound() {
        console.log('bird making sound')
    }
}
// sparrow can fly and makesound
class Sparrow extends Bird {
    fly(): void {
        console.log('Sparrow fly');
    }
    makeSound(): void {
        console.log('Sparrow fly')
    }
}
// 
class Penguin2 extends BaseBird {
    makeSound() {
        console.log('bird making sound')
    }
}

makeBirdFly(new Sparrow()) //so there Penguin2 cant be pass