class Student{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

const student1 = new Student("John", "Smith");
const student2 = new Student("Marry", "Evans");

console.log(student1.name);
console.log(student2.surname);
//console.log(student2.age);

const student3 = {
    name: "Bill",
    surname: "Rogers"
}

const student4 = {
    name: "Carl",
    age: 27
}

console.log(student3.surname);
console.log(student4.surname);

const numbers = [3, 6, 7];
const sports = ["basketball", "hockey", "athletics"];

numbersUpdated = numbers.map((item) => item + 1);
console.log(numbersUpdated);

console.log(sports.sort());
console.log(sports.reverse());

