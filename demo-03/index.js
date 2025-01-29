"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myNumber = 10;
var myString = "Hello, World!";
function addNumbers(a, b) {
    return a + b;
}
console.log(myString, addNumbers(myNumber, 5));
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
console.log(getFullName(person));
// ================================================================================
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var today = Days.Wednesday;
console.log(today);
// ================================================================================================
var Animal_1 = require("./Animal");
var animal = new Animal_1.Animal("Dog");
animal.move(10);
// ================================================================================================
var ar1 = ["a", "b", "c"];
ar1 = ["a", 1, "c"];
console.log(ar1);
var ar2 = [];
// ar2.push("a");
var ar3 = [];
ar3.push("a");
// ================================================================================================
function printArray(ar) {
    ar.forEach(function (element) {
        console.log(element);
    });
}
printArray(["a", "b", "c"]);
// ================================================================================================
var ar4 = ["a", "b", "c"];
ar4.push("d");
// ================================================================================================
console.log(ar4); // ["a", "b", "c", "d"]
console.log.apply(// ["a", "b", "c", "d"]
console, ar4); // a b c d spread operator
// ================================================================================================
var ar5; // Tuple
ar5 = [1, 2];
var x = ar5[0], y = ar5[1];
console.log(x, y);
// ================================================================================================
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 200] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red, Color.Green, Color.Blue);
var Value;
(function (Value) {
    Value["A"] = "Apple";
    Value["B"] = "Banana";
    Value["C"] = "Cherry";
})(Value || (Value = {}));
console.log(Value.A, Value.B, Value.C);
// ================================================================================================
// Functions
function add(x, y) {
    return x + y;
}
console.log(add(20, 40));
console.log(typeof (add(20, 40)));
// --------------------------------------------------------------------------------
function concat(x, y) {
    return x + " " + y;
}
console.log(concat("Hello", "World"));
// --------------------------------------------------------------------------------
function add2(x, y) {
    if (y === void 0) { y = 20; }
    return x + y;
}
console.log(add2(20));
// --------------------------------------------------------------------------------
function add3(x, y) {
    console.log(y);
}
add3(10, 20);
// --------------------------------------------------------------------------------
// function add4(x: number, y: number) : never {
//   throw new Error("Not Implemented");
// }
// add4(10, 20);
// --------------------------------------------------------------------------------
function calculate(x, y, operation) {
    var result = operation(x, y);
    return result;
}
console.log(calculate(10, 20, add));
function add5(x, y) {
    return x + y;
}
function calculate2(x, y, operation) {
    var result = operation(x, y);
    return result;
}
console.log(calculate2(40, 20, add5));
// --------------------------------------------------------------------------------
// Arrow Functions
var add6 = function (x, y) {
    return x + y;
};
console.log(add6(40, 50));
// ================================================================================================
// Objects
var person2 = {
    name: 'John',
    address: 'Galle'
};
console.log(person2);
console.log(person2.name);
// --------------------------------------------------------------------------------
var person3 = {
    name: 'John',
    address: 'Galle'
};
console.log(person3);
console.log(person3.address);
var person4 = {
    name: 'Harry',
    address: 'London'
};
console.log(person4);
console.log(person4.name);
// --------------------------------------------------------------------------------
var obj = {
    a: 10,
    b: {
        c: 30,
    }
};
var a = obj.a, b = obj.b;
console.log(a, b.c);
// ================================================================================================
// Classes
var Demo = /** @class */ (function () {
    function Demo(myVariable) {
        this.myVariable = myVariable;
    }
    Demo.prototype.getMyVariable = function () {
        return this.myVariable;
    };
    return Demo;
}());
var demo = new Demo("Hello, World!");
console.log(demo.getMyVariable());
