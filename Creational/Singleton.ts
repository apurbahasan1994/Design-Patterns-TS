// A class has only one instance, while providing a global 
// access point to the instance

/* 
Steps :
1. Create a static property
2. Add private to constructor
3. create a public static method for getting and
creating singleton intance
*/

/* 
 Use cases : 

 Does the class has ssared data resorces that must be 
 created only once.

 Do we want to avoid duplicated behavior per object for 
 the consumers.

*/
class SingleTon {
    private static _instance: SingleTon;
    private constructor() {
    }
    static getInstance() {
        if (!SingleTon._instance) {
            SingleTon._instance = new SingleTon();
        }
        return SingleTon._instance;
    }
}

const s1 = SingleTon.getInstance()
const s2 = SingleTon.getInstance()

console.log(s1 === s2);


class Logger {
    static instance: Logger
    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
        }
        return Logger.instance;
    }
    log(message: string) {
        console.log(message)
    }
}

// the logger is now readonly
export const logger = Object.freeze(new Logger());



// Porblems with singleton
// 1. Tight coupling
class Application {
    // tight coupling
    // app is directly dependent on logger
    constructor(private logger: Logger) {
    }
    run() {
        this.logger.log('App is runnig');
    }
    shutDown() {
        this.logger.log('App is shutting down');
    }
}


const app = new Application(logger);

app.run()
setTimeout(() => { app.shutDown() }, 1000)

// 2. Can not create/ difficult to create sub class of singleto
// So it makes the class bulky for large methods and business loogic


