/*

The composite pattern is a structural design pattern that lets you compose objects into
tree like structures and then work with these structures as if they were individual objects


components of the comosite pattern
1.Component : This is an interface for all the objects in the composition. It defines the default
behavirs for accessing components in the composite structure
2.Leaf : It defines the behavior for the elemets in the composition. It has not children
3.Composite: It stores child components and implements child related operations in the component
interface
*/

interface Employee {
    getName(): string;
    getSalary(): number;
    getRole(): string;
}

class Developer implements Employee {
    constructor(protected name: string, protected salary: number) { }
    getName(): string {
        return this.name
    }
    getSalary(): number {
        return this.salary
    }
    getRole(): string {
        return 'Developer';
    }

}

class Designer implements Employee {
    constructor(protected name: string, protected salary: number) { }
    getName(): string {
        return this.name
    }
    getSalary(): number {
        return this.salary
    }
    getRole(): string {
        return 'Designer';
    }

}

interface CompositeEmployee extends Employee{
    addEmplyee(employee: Employee): void;
    removeEmployee(employee: Employee): void;
    getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
    private employees: Employee[] = [];
    constructor(protected name, protected salary) { }
    addEmplyee(employee: Employee): void {
        this.employees.push(employee);
    }
    removeEmployee(employee: Employee): void {
        this.employees = this.employees.filter(x => employee);
    }
    getEmployees(): Employee[] {
        return this.employees;
    }
    getName(): string {
        return this.name
    }
    getSalary(): number {
        return this.salary
    }
    getRole(): string {
        return 'Manager';
    }

}