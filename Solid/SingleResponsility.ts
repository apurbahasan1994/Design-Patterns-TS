// A class should have one reason to change.
// the reason means the change shoud me come from 
// a single source, not multiple source

class User {
    constructor(name: string, email: string) { }

    // should we put this method in this class?
    userAuthentication() {

    }
}

// or we can create a new class
class UserAuthentication {
    constructor(user: User) { }
    autheticateUser(password: string) {
    }
}


// another example

// without single responsibility
class BlogPost {
    title: string;
    content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    cretePost() { }

    updatePost() { }

    deletePost() { }

    displayHtml() { }

}
// the blogpost class should be responsible for
// creating , updating and deleting the post
// iit is not its duty to display the post
// there should be another class for that

class DisplayBlogPost {

    displayHtml(blog: BlogPost) {
        // do something and show the blogpost
    }
}

// another example 
class Product {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Order {


    getProducts() { }
    updateProduct() { }
    deleteProduct() { }

    generateInvoice() { }

    processPayment() { }
}


// the responsiblity of order class should not be 
// generating invoice , there should be another class
// for that , like process payment also there should
// be another class


class Invoice {
    generateInvoice() { }
}

class PaymentProcessor {
    processPayment() {
    }
}