"use strict";
let age = 20;
console.log(age);
if (age < 50)
    age += 10;
console.log(age);
let isDone = false;
console.log(isDone);
let number = 123456789;
let sales = 123456789;
console.log(number);
console.log(sales);
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
let color = "blue";
color = 'red';
console.log(color);
let fullName = `Bob Bobbington`;
let myage = 37;
let sentence = `Hello, my name is ${fullName}`;
console.log(sentence);
let list = [1, 2, 3];
console.log(list);
let list2 = [1, 2, 3];
console.log(list2);
list.forEach((item) => { item.toFixed; });
let x;
x = ['hello', 10];
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
console.log(Color[1]);
let notSure = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
let u = undefined;
let n = null;
console.log(u);
console.log(n);
function error(message) {
    throw new Error(message);
}
function add(x, y) {
    return x + y;
}
console.log(add(10, 20));
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("Bob"));
console.log(buildName("Bob", "Adams"));
let obj = { x: 10, y: 20 };
console.log(obj);
let optObj = { x: 10 };
let someValue = "this is a string";
let strLength = someValue.length;
console.log(strLength);
//# sourceMappingURL=index.js.map