// Description: Chain of Responsibility Pattern
// The Chain of Responsibility Pattern allows an object to pass a request along a chain of handlers.     
// Each handler can either process the request or pass it to the next handler in the chain.
// This pattern decouples the sender of a request from its receivers, allowing multiple objects to handle the request without knowing which one will ultimately handle it.
// It is particularly useful when you want to avoid coupling the sender of a request to its receivers,
// and when you want to allow multiple handlers to process the request in a flexible manner.
//
// Example: Logging System
class Logger {  
    private nextLogger: Logger | null = null;

    constructor(private level: number) {}

    setNext(logger: Logger): Logger {
        this.nextLogger = logger;
        return logger;
    }

    log(message: string, level: number): void {
        if (this.level <= level) {
            this.write(message);
        }
        if (this.nextLogger) {
            this.nextLogger.log(message, level);
        }
    }

    protected write(message: string): void {
        console.log(`${this.level}: ${message}`);
    }
}
// Example usage
const errorLogger = new Logger(1);
const warningLogger = new Logger(2);
const infoLogger = new Logger(3);
errorLogger.setNext(warningLogger).setNext(infoLogger);
errorLogger.log("This is an error message", 1); // 1: This is an error message
errorLogger.log("This is a warning message", 2); // 2: This is a warning message
errorLogger.log("This is an info message", 3); // 3: This is an info message
// The Chain of Responsibility Pattern allows for flexible logging levels,
// where each logger can handle messages of a specific level and pass them along the chain.
// This decouples the logging logic from the message handling logic,        
// allowing for easy extension and modification of the logging system without changing the client code.
// The pattern is particularly useful in scenarios where you want to avoid tight coupling between the sender and receiver,
// and when you want to allow multiple handlers to process the request in a flexible manner.
// When to Use the Chain of Responsibility Pattern
// 1. When you want to decouple the sender of a request from its receivers.
// 2. When you want to allow multiple objects to handle a request without knowing which one will ultimately handle it.
// 3. When you want to avoid tight coupling between the sender and receiver.
// 4. When you want to allow for flexible request handling and processing.
// 5. When you want to implement a logging system where different loggers can handle messages of different levels.
// 6. When you want to implement a UI event handling system where different components can handle events in a flexible manner.  
// 7. When you want to implement a validation system where different validators can handle different types of validation.
// 8. When you want to implement a request processing system where different handlers can process requests in a flexible manner.


// Another Example:
class Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log(`No handler for request: ${request}`);
        }
    }
}
class ConcreteHandlerA extends Handler {
    handle(request: string): void {
        if (request === "A") {
            console.log("ConcreteHandlerA handled request A");
        } else {
            super.handle(request);
        }
    }
}
class ConcreteHandlerB extends Handler {
    handle(request: string): void {
        if (request === "B") {
            console.log("ConcreteHandlerB handled request B");
        } else {
            super.handle(request);
        }
    }
}
class ConcreteHandlerC extends Handler {
    handle(request: string): void {
        if (request === "C") {
            console.log("ConcreteHandlerC handled request C");
        } else {
            super.handle(request);
        }
    }
}
// Example usage
const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
const handlerC = new ConcreteHandlerC();
handlerA.setNext(handlerB).setNext(handlerC);
handlerA.handle("A"); // ConcreteHandlerA handled request A
handlerA.handle("B"); // ConcreteHandlerB handled request B
handlerA.handle("C"); // ConcreteHandlerC handled request C
handlerA.handle("D"); // No handler for request: D
// The Chain of Responsibility Pattern allows for flexible request handling,
// where each handler can process specific requests and pass them along the chain.
// This decouples the request handling logic from the request processing logic,
// allowing for easy extension and modification of the request handling system without changing the client code.        
// The pattern is particularly useful in scenarios where you want to avoid tight coupling between the sender and receiver,
// and when you want to allow multiple handlers to process the request in a flexible manner.
// When to Use the Chain of Responsibility Pattern
// 1. When you want to decouple the sender of a request from its receivers.
// 2. When you want to allow multiple objects to handle a request without knowing which one will ultimately handle it.
// 3. When you want to avoid tight coupling between the sender and receiver.
// 4. When you want to allow for flexible request handling and processing.  
// 5. When you want to implement a request processing system where different handlers can process requests in a flexible manner.
// 6. When you want to implement a UI event handling system where different components can handle events in a flexible manner.
// 7. When you want to implement a validation system where different validators can handle different types of validation.
// 8. When you want to implement a logging system where different loggers can handle messages of different levels.
// 9. When you want to implement a command processing system where different commands can be handled by different handlers.
// 10. When you want to implement a workflow processing system where different steps can be handled by different handlers.
// 11. When you want to implement a middleware system where different middleware can handle requests in a flexible manner.  
// 12. When you want to implement a pipeline processing system where different stages can be handled by different handlers.
// 13. When you want to implement a chain of responsibility for error handling, allowing different handlers to process errors in a flexible manner. 
// 14. When you want to implement a chain of responsibility for authentication, allowing different handlers to process authentication requests in a flexible manner.
// 15. When you want to implement a chain of responsibility for authorization, allowing different handlers to process authorization requests in a flexible manner.
// 16. When you want to implement a chain of responsibility for caching, allowing different handlers to process caching requests in a flexible manner.
// 17. When you want to implement a chain of responsibility for throttling, allowing different handlers to process throttling requests in a flexible manner.
// 18. When you want to implement a chain of responsibility for rate limiting, allowing different handlers to process rate limiting requests in a flexible manner.
// 19. When you want to implement a chain of responsibility for input validation, allowing different handlers to process input validation requests in a flexible manner.