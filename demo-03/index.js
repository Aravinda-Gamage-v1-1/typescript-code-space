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
function add(x, y) {
    return x + y;
}
console.log(add(20, 40));
