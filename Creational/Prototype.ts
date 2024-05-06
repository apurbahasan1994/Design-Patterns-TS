interface IClonable<T> {
    clone(): T;
}

interface IUserDetails {
    name: string;
    age: number;
    email: string;
}

class UserDetails implements IUserDetails, IClonable<UserDetails> {
    name: string;
    age: number;
    email: string;
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    clone(): UserDetails {
        const newCloned = Object.assign({}, this);
        return newCloned;
    }

}



const user = new UserDetails('apurba', 'apurba@gmail.com', 30);
const user2 = user.clone();
console.log(user, user2);

interface ShapeProperties {
    color: string;
    x: number;
    y: string;
}
abstract class Shape implements ShapeProperties {
    color: string;
    x: number;
    y: string;
    constructor(color: string, x: number, y: string) { }
    abstract clone(): Shape;
}

class Rectangle extends Shape {
    constructor(color: string, x: number, y: string) {
        super(color, x, y);

    }
    clone(): Shape {
        return new Rectangle(this.color, this.x, this.y)
    }

}