// Construct complex objects step by step

/* 

The main parts of the builder pattern is the the Builder
and the Director class

Director : Responsible for executing the building process
in step by step or sequential manner.

*/

// Explain Builder Pattern:
// The Builder Pattern is a creational design pattern that allows for the step-by-step construction of complex objects.
// It separates the construction of a complex object from its representation, allowing the same construction process to create different representations. This pattern is particularly useful when an object needs to be created with many optional parameters or when the construction process involves multiple steps.
// It provides a way to construct an object by specifying its type and content, allowing for more readable and maintainable code.
// Example: Building a Product with Billing Address
// This code demonstrates the Builder Pattern by creating a Product with a Billing Address.
// The ProductBuilder class constructs a Product object step by step, allowing for customization of its properties.
// The Director class orchestrates the building process, ensuring that the Product is created with a minimal set of properties.



interface IBillingAddress {
    zip: string;
    street: string;
    road: string;
    doorNumber: string;
    country: string;
    state?: string;
    city: string;
}

class BillingAddress implements IBillingAddress {
    zip: string;
    street: string;
    road: string;
    doorNumber: string;
    country: string;
    state?: string | undefined;
    city: string;

    constructor({ zip, city, street, country, state, doorNumber, road }: IBillingAddress) {
        this.zip = zip;
        this.city = city;
        this.street = street;
        this.country = country;
        this.state = state;
        this.doorNumber = doorNumber;
        this.road = road;
    }
}

enum Category {
    PREMIUM = "PREMIUM",
    REGULAR = "REGULAR",
    DISCOUNT = "DISCOUNT"
}

interface IProduct {
    price: number;
    description: string;
    billingAddress: IBillingAddress;
    category: Category;
}

interface IBuilder {
    reset(): void;
    setPrice(price: number): void;
    setDescription(description: string): void;
    setBillingAddress(billingAddress: IBillingAddress): void;
    setCategory(category: Category): void;
    getProduct(): IProduct;
}

class Product implements IProduct {
    description: string;
    category: Category;
    price: number;
    billingAddress: IBillingAddress;

    constructor() {
        this.category = Category.REGULAR; // Initialize default value
        this.price = 0; // Initialize default value
        this.description = ''; // Initialize default value
        this.billingAddress = new BillingAddress({
            zip: '',
            street: '',
            road: '',
            doorNumber: '',
            country: '',
            city: ''
        }); // Initialize default value
    }
}

class ProductBuilder implements IBuilder {
    private product!: Product;

    reset(): void {
        this.product = new Product();
    }

    setPrice(price: number): void {
        this.product.price = price;
    }

    setDescription(description: string): void {
        this.product.description = description;
    }

    setBillingAddress(billingAddress: IBillingAddress): void {
        this.product.billingAddress = new BillingAddress(billingAddress);
    }

    setCategory(category: Category): void {
        this.product.category = category;
    }

    getProduct(): IProduct {
        const finalProduct = this.product;
        this.reset();
        return finalProduct;
    }
}

interface IDirector {
    setBuilder(builder: IBuilder): void;
}

class Director implements IDirector {
    private builder!: IBuilder;

    setBuilder(builder: IBuilder): void {
        this.builder = builder;
    }

    createMinimalProduct(): IProduct {
        this.builder.reset();
        this.builder.setBillingAddress({
            zip: "1200",
            street: "1200",
            road: "10",
            doorNumber: "10",
            country: "BD",
            city: "DHAKA"
        });
        this.builder.setPrice(20);
        this.builder.setCategory(Category.REGULAR);
        this.builder.setDescription('');
        return this.builder.getProduct();
    }
}

const builder = new ProductBuilder();
const productDirector = new Director();
productDirector.setBuilder(builder);
const product: IProduct = productDirector.createMinimalProduct();
console.log(product);

