let myNumber: number = 10;
let myString: string = "Hello, World!";

function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(myString ,addNumbers(myNumber, 5));

// ================================================================================================

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

let person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(getFullName(person));

// ================================================================================

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let today: Days = Days.Wednesday;
console.log(today);

// ================================================================================================



import { Animal } from "./Animal";

let animal = new Animal("Dog");
animal.move(10);

// ================================================================================================

let ar1 : (string | number)[] = ["a", "b", "c"];
ar1 = ["a", 1, "c"];
console.log(ar1);

let ar2 = [];
// ar2.push("a");

let ar3 : any[] = [];
ar3.push("a");

// ================================================================================================

function printArray(ar : string[]) {
  ar.forEach(element => {
    console.log(element);
  });
}

printArray(["a", "b", "c"]);

// ================================================================================================

