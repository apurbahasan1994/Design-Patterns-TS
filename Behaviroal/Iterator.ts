/* 
The iterator pattern is a design pattern that allows sequential access to elements in a collection, without exposing its underlying
representation. It provides a way to access the elements of an aggregate object sequentially without exposing the underlying details
*/

class User {
    constructor(public name: string) { }
}

interface MyIteratorResult<T> {
    value: T | null;
    done: boolean;
}

interface MyIterator<T> {
    next(): MyIteratorResult<T>;
    hasNext(): boolean;
}

interface Collection<T> {
    createIterator(): MyIterator<T>;
}
class UserIterator implements MyIterator<User> {
    private count = 0;
    constructor(private collection: UserCollection) { }
    next(): MyIteratorResult<User> {
        if (this.hasNext()) {
            return {
                value: this.collection.getItems()[this.count++],
                done: false
            }
        }
        else {
            return {
                value: null,
                done: true
            }
        }
    }
    hasNext(): boolean {
        return this.collection.getItems().length < this.count;
    }

}
class UserCollection implements Collection<User> {
    constructor(private users: User[]) {

    }
    createIterator(): MyIterator<User> {
        return new UserIterator(this);
    }

    getItems() {
        return this.users;
    }
}


//client code

const users = [
    new User('John'),
    new User('Mathew'),
    new User('Luke'),
];

const userCollection = new UserCollection(users);
const userIterator = userCollection.createIterator();
console.log(userIterator.next());
console.log(userIterator.next());

// Another Example

interface HistoryIterator<T> {
    next(): T | null;
    hasNext(): boolean;
    curent(): T | null;
}

class BrowerHistory{
    private _history: string[] = [];
    private index: number = -1;

    add(url: string): void {
        this._history.push(url);
        this.index++;
    }

    getHistory(): string[] {
        return [...this._history];
    }
    pop(): string | null {
        if (this.index >= 0) {
            const lastItem = this._history.pop();
            this.index--;
            return lastItem || null;
        }
        return null
    }

    createIterator(): HistoryIterator<string> {
        return new BrowserHistoryIterator(this);
    }
}

class BrowserHistoryIterator implements HistoryIterator<string>  {
    private index: number = 0;
    private history: string[];

    constructor(private browserHistory: BrowerHistory) {
        this.history = browserHistory.getHistory();
    }

    next(): string | null {
        if (this.hasNext()) {
            return this.history[this.index++];
        }
        return null;
    }

    hasNext(): boolean {
        return this.index < this.history.length;
    }

    curent(): string | null {
        if (this.index > 0 && this.index <= this.history.length) {
            return this.history[this.index - 1];
        }
        return null;
    }
}

