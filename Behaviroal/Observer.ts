
/* 

The observer design pattern is a behavioral design pattern that allows us to
define a subsvription mechanism to send notifications to multiple objects about
any new events that happend to the object they are observing. The object that being
wathcd is called subject. The object that are watching the state changes are 
called observers or listeners.

*/


interface ISubject {
    addObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(): void;
    getState(): number;
    setState(state: number): void;
}
interface IObserver {
    update(subject: ISubject): void
}


class Observer implements IObserver {
    constructor(private id: number) {

    }
    update(subject: ISubject): void {
        console.log(`${this.id} updated`,subject.getState());
    }

}

class Subject implements ISubject {
    private observers: IObserver[] = [];
    private state = 0;
    addObserver(observer: IObserver): void {
        const isExist = this.observers.some(x => x === observer);
        if (isExist) {
            return;
        }
        this.observers.push(observer);
    }
    removeObserver(observer: IObserver): void {
        this.observers.filter(x => x !== observer);
    }
    notifyObservers(): void {
        this.observers.forEach((o) => o.update(this))
    }
    getState(): number {
        return this.state;
    }
    setState(state: number): void {
        this.state = state;
        this.notifyObservers();
    }

}

const subject = new Subject();
const observer = new Observer(1);
subject.addObserver(observer);