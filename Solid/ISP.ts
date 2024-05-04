// Without just adding new method to a interface, we should 
// think, if that method should be part of that interface?
// or we should create a seperate interface.

// No code should be forced to depend on methods it does not
// use

interface DocumentManager {
    openDocuments(): void;
    closeDocuments(): void;
    saveDocuments(): void;
    scanDocuments(): void;
}

class BasicEditor implements DocumentManager {
    openDocuments(): void {
        console.log("Opening documents");
    }
    closeDocuments(): void {
        console.log("Closing documents");
    }
    saveDocuments(): void {
        console.log("Saving documents");
    }
    // Basic editor cant scan documents 
    // still we need to implemet the scanDocuments
    // bcz its implemented DocumentManager
    scanDocuments(): void {
        console.log('dont do anything')
    }

}

// solving ---> create smaller interfaces

interface DoucmentOpener {
    openDocuments(): void;
}

interface DocumentScanner {
    scanDocuments(): void;
}
interface DocumentSaver {
    saveDocuments(): void;
}
interface DocumentCloser {
    closeDocuments(): void;
}

interface IAdvanceEditor extends DoucmentOpener, DocumentScanner, DocumentSaver, DocumentCloser {
}

interface ISimpleScanner extends DoucmentOpener, DocumentSaver, DocumentCloser { }

class AdvancedEditor implements IAdvanceEditor {
    openDocuments(): void {
        console.log("Opening documents");
    }
    closeDocuments(): void {
        console.log("Closing documents");
    }
    saveDocuments(): void {
        console.log("Saving documents");
    }
    scanDocuments(): void {
        console.log('Scanning Documnets')
    }

}

class SimpleEditor implements ISimpleScanner {
    openDocuments(): void {
        console.log("Opening documents");
    }
    closeDocuments(): void {
        console.log("Closing documents");
    }
    saveDocuments(): void {
        console.log("Saving documents");
    }
}


