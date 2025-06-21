//Intro:
// The Template Method pattern defines the skeleton of an algorithm in a method, 
// deferring some steps to subclasses.
// It lets subclasses redefine certain steps of an algorithm without changing 
// the algorithm's structure.
// This pattern is useful when you have a common algorithm that can be customized
// by subclasses, allowing for code reuse and flexibility.

// Example: Document Processing System  
// In this example, we have a base class `DocumentProcessor` that defines the
// template method `processDocument`. The subclasses `PDFProcessor` and `WordProcessor`
// implement the specific steps for processing PDF and Word documents, respectively.

// When to usen Template Method Pattern:
// 1. When you have a common algorithm that can be customized by subclasses.
// 2. When you want to define the skeleton of an algorithm in a base class and
//    allow subclasses to implement specific steps. 
// 3. When you want to promote code reuse by defining common behavior in a base class.
// 4. When you want to enforce a specific sequence of steps in an algorithm while allowing
//    subclasses to provide their own implementations for certain steps.
// 5. When you want to avoid code duplication by defining common behavior in a base class
//    and allowing subclasses to implement specific variations.
// 6. When you want to provide a framework for subclasses to follow, ensuring that they
//    adhere to a specific structure while allowing for customization of certain steps.
// 7. When you want to encapsulate the algorithm's structure in a base class while
//    allowing subclasses to provide their own implementations for specific steps.
// 8. When you want to define a template for an algorithm that can be reused by
//    multiple subclasses, promoting consistency and reducing code duplication.
// 9. When you want to create a framework that allows subclasses to extend and customize
//    the behavior of an algorithm without changing its overall structure.
// 10. When you want to define a common interface for a family of algorithms,
//     allowing subclasses to implement specific variations while adhering to a common structure.
// 11. When you want to provide a way for subclasses to hook into specific points in
//     the algorithm's execution, allowing for customization without changing the overall flow.
// 12. When you want to enforce a specific sequence of steps in an algorithm while allowing
//     subclasses to provide their own implementations for certain steps.
// 13. When you want to create a framework that allows subclasses to extend and customize
//     the behavior of an algorithm without changing its overall structure.
// 14. When you want to define a template for an algorithm that can be reused by
//     multiple subclasses, promoting consistency and reducing code duplication.
// 15. When you want to encapsulate the algorithm's structure in a base class while
//     allowing subclasses to provide their own implementations for specific steps.
// 16. When you want to provide a framework for subclasses to follow, ensuring that they
//     adhere to a specific structure while allowing for customization of certain steps.    

// Template Method Pattern Example
// This example demonstrates the Template Method pattern by defining a base class
// `DocumentProcessor` that outlines the steps for processing a document.
// Subclasses like `PDFProcessor` and `WordProcessor` implement the specific steps
// for processing PDF and Word documents, respectively. The `processDocument` method
// in the base class defines the template method that calls the individual steps in order.
// The subclasses provide their own implementations for reading, parsing, and saving documents.
// This pattern allows for code reuse and flexibility, as the base class defines the
// overall structure of the document processing algorithm while allowing subclasses to
// customize specific steps without changing the algorithm's structure.
// Template Method Pattern Example

interface DocumentProcessor {
    processDocument(): void;
    readDocument(): void;
    parseDocument(): void;
    saveDocument(): void;
}
class PDFProcessor implements DocumentProcessor {
    processDocument(): void {
        this.readDocument();
        this.parseDocument();
        this.saveDocument();
    }

    readDocument(): void {
        console.log("Reading PDF document...");
    }

    parseDocument(): void {
        console.log("Parsing PDF document...");
    }

    saveDocument(): void {
        console.log("Saving PDF document...");
    }
}

class WordProcessor implements DocumentProcessor {
    processDocument(): void {
        this.readDocument();
        this.parseDocument();
        this.saveDocument();
    }

    readDocument(): void {
        console.log("Reading Word document...");
    }

    parseDocument(): void {
        console.log("Parsing Word document...");
    }

    saveDocument(): void {
        console.log("Saving Word document...");
    }
}

// Usage
const pdfProcessor = new PDFProcessor();
pdfProcessor.processDocument();     
// Output:
// Reading PDF document...
// Parsing PDF document...
// Saving PDF document...
