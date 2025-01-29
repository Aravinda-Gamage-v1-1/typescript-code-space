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

let ar4 : string[] = ["a", "b", "c"];
ar4.push("d");

// ================================================================================================

console.log(ar4); // ["a", "b", "c", "d"]
console.log(...ar4); // a b c d spread operator

// ================================================================================================

let ar5 : [number, number]; // Tuple
ar5 = [1, 2]; 

let [x, y] = ar5;
console.log(x, y);

// ================================================================================================
// Enums

enum Color {
  Red = 10,
  Green = 100,
  Blue = 200,
}

console.log(Color.Red, Color.Green, Color.Blue); 

enum Value {
  A = "Apple",
  B = "Banana",
  C = "Cherry",
}

console.log(Value.A, Value.B, Value.C);

// ================================================================================================
// Functions

function add(x: number, y: number) : number {
  return x + y;
}

console.log(add(20, 40));
console.log(typeof(add(20, 40)));

// --------------------------------------------------------------------------------

function concat(x: string, y: string) {
  return x + " " + y;
}

console.log(concat("Hello", "World"));

// --------------------------------------------------------------------------------

function add2(x: number, y: number = 20) : number {
  return x + y;
}

console.log(add2(20));

// --------------------------------------------------------------------------------

function add3(x: number, y: number) : void {
  console.log(y);
}
add3(10, 20);

// --------------------------------------------------------------------------------

// function add4(x: number, y: number) : never {
//   throw new Error("Not Implemented");
// }
// add4(10, 20);

// --------------------------------------------------------------------------------

function calculate(x: number, y: number, operation: (x: number, y: number) => number) : number {
  const result = operation(x, y);
  return result;
}
console.log(calculate(10, 20, add));

// --------------------------------------------------------------------------------

type addFn = (x: number, y: number) => number;

function add5(x: number, y: number) : number {
  return x + y;
}

function calculate2(x: number, y: number, operation: addFn) : number {
  const result = operation(x, y);
  return result;
}
console.log(calculate2(40, 20, add5));

// ================================================================================================
