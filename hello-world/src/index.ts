let age: number = 20;
//age = 'age'; // Error: Type 'string' is not assignable to type 'number'.
console.log(age); // 20

// Path: hello-world/index.ts

if(age < 50)
    age +=10;
console.log(age); // 30

// built-in types
// Boolean
let isDone: boolean = false;
console.log(isDone); // false

// Number

let number: number = 123456789;
//we can separate its digits using an underscore
let sales: number = 123_456_789;
console.log(number); // 123456789
console.log(sales); // 123456789

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal); // 6
console.log(hex); // 61453
console.log(binary); // 10
console.log(octal); // 484


// String
let color: string = "blue";
color = 'red';
console.log(color); // red

let fullName: string = `Bob Bobbington`;
let myage: number = 37;
let sentence: string = `Hello, my name is ${ fullName }`;
console.log(sentence); // Hello, my name is Bob Bobbington

// Array
let list: number[] = [1, 2, 3];
console.log(list); // [ 1, 2, 3 ]

let list2: Array<number> = [1, 2, 3];
console.log(list2); // [ 1, 2, 3 ]

list.forEach((item) => {item.toFixed});
// Tuple
let x: [string, number];
x = ['hello', 10];
console.log(x); // [ 'hello', 10 ]
//x = [10, 'hello']; // Error: Type 'number' is not assignable to type 'string'.

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c); // 1
console.log(Color[1]); // Green

// Any
let notSure: any = 4;
console.log(notSure); // 4
notSure = "maybe a string instead";
console.log(notSure); // maybe a string instead
notSure = false;
console.log(notSure); // false

// Void
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser(); // This is my warning message

// Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log(u); // undefined
console.log(n); // null

// Never
function error(message: string): never {
    throw new Error(message);
}
//error('Something went wrong');
//console.log('This line will never execute');

// functions
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(10, 20)); // 30

// Optional Parameters

function buildName(firstName: string, lastName?: string): string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("Bob")); // Bob
console.log(buildName("Bob", "Adams")); // Bob Adams

//objects

let obj: { x: number, y: number } = { x: 10, y: 20 };
console.log(obj); // { x: 10, y: 20 }

let optObj: { x: number, y?: number } = { x: 10 };

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // 16