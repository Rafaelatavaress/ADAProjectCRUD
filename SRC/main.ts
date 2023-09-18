class Employee {
    private name: string;
    private age: number;
    private salary: number;

    constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    }

    getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
}

const employee1 = new Employee("John Doe", 30, 50000);
console.log(employee1.getDetails());

