// What is adapter Pattern?
// Explain : 
// The Adapter Pattern is a structural design pattern that
//  allows incompatible interfaces to work together. It acts as a 
// bridge between two incompatible interfaces, enabling them to communicate and
//  function together. The Adapter Pattern is particularly useful when you want to use an
//  existing class but its interface does not match the one you need.

class RectangleClass {
    constructor(private width: number, private height: number) {}

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }
}
class SquareClass {
    constructor(private side: number) {}

    getSide(): number {
        return this.side;
    }
}
class RectangleAdapter {
    constructor(private square: SquareClass) {}

    getWidth(): number {
        return this.square.getSide();
    }

    getHeight(): number {
        return this.square.getSide();
    }
}
class AreaCalculator {
    calculateArea(shape: RectangleClass | RectangleAdapter): number {
        return shape.getWidth() * shape.getHeight();
    }
}
// Example usage
const rectangle = new RectangleClass(5, 10);
const square = new SquareClass(4);
const squareAdapter = new RectangleAdapter(square);
const areaCalculator = new AreaCalculator();
console.log("Rectangle Area:", areaCalculator.calculateArea(rectangle)); // Rectangle Area: 50
console.log("Square Area via Adapter:", areaCalculator.calculateArea(squareAdapter)); // Square Area via Adapter: 16

// Exapmle with Database Connection
class Database {
    connect(): void {
        console.log("Connecting to the database...");
    }
}
class NoSQLDatabase {
    connectToNoSQL(): void {
        console.log("Connecting to the NoSQL database...");
    }
}
class NoSQLDatabaseAdapter {
    constructor(private noSQLDatabase: NoSQLDatabase) {}

    connect(): void {
        this.noSQLDatabase.connectToNoSQL();
    }
}
class DatabaseClient {
    constructor(private database: Database | NoSQLDatabaseAdapter) {}

    connectToDatabase(): void {
        this.database.connect();
    }
}
// Example usage
const sqlDatabase = new Database();
const noSQLDatabase = new NoSQLDatabase();
const noSQLDatabaseAdapter = new NoSQLDatabaseAdapter(noSQLDatabase);
const databaseClient1 = new DatabaseClient(sqlDatabase);
const databaseClient2 = new DatabaseClient(noSQLDatabaseAdapter);
databaseClient1.connectToDatabase(); // Connecting to the database...
databaseClient2.connectToDatabase(); // Connecting to the NoSQL database...
// Output:
// Connecting to the database...
// Connecting to the NoSQL database...
//
// The Adapter Pattern is useful when:
// 1. You want to use an existing class but its interface does not match the one you need.
// 2. You want to create a reusable class that can work with different interfaces.
// 3. You want to create a bridge between two incompatible interfaces.
// 4. You want to adapt a class to a new interface without modifying its source code.
// 5. You want to integrate third-party libraries or legacy code with your application.
// 6. You want to create a flexible and extensible architecture that can accommodate future changes.
// 7. You want to create a common interface for different classes that have different implementations.  