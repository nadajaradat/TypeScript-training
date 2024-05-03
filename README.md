# TypeScript Training

# Table of Contents
- [TypeScript Training](#typescript-training)
- [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
    - [What is TypeScript?](#what-is-typescript)
    - [Benefits of TypeScript:](#benefits-of-typescript)
    - [Statically-Typed vs Dynamically-Typed](#statically-typed-vs-dynamically-typed)
    - [TypeScript: JavaScript with Type Checking](#typescript-javascript-with-type-checking)
  - [Setting up the Development Environment](#setting-up-the-development-environment)
    - [Downloading Node.js and npm](#downloading-nodejs-and-npm)
    - [Using Visual Studio Code](#using-visual-studio-code)
    - [Configuring the TypeScript Compiler](#configuring-the-typescript-compiler)
    - [Debugging TypeScript Applications](#debugging-typescript-applications)
  - [Fundamentals](#fundamentals)
    - [Built-in types](#built-in-types)
    - [Advanced types](#advanced-types)
## Introduction

### What is TypeScript?

TypeScript (TS) is a programming language developed to address the shortcomings of JavaScript. It is built on top of JavaScript, which means every JavaScript file is also a valid TypeScript file.

### Benefits of TypeScript:

- **Static Typing**: TypeScript introduces static typing, allowing for explicit declaration of variable types.
- **Code Completion**: IDEs and editors provide better code completion support due to type information.
- **Refactoring**: TypeScript facilitates easier and safer code refactoring.
- **Shorthand Notations**: TypeScript provides shorthand notations for common patterns, enhancing code readability and writability.

### Statically-Typed vs Dynamically-Typed

In statically-typed languages like C++, C#, and Java, variables must be declared with a fixed type. For example, if a variable is declared as an integer, it can only hold integer values.

Conversely, dynamically-typed languages allow variables to be dynamic, with types determined at runtime. While this offers flexibility, it can also lead to runtime errors if types are mismatched.

### TypeScript: JavaScript with Type Checking

TypeScript combines the flexibility of JavaScript with static type checking. This means you can catch errors at compile time rather than runtime.

```typescript
let age: number = 20;
age = 'age'; // Error: Type 'string' is not assignable to type 'number'.
```

## Setting up the Development Environment

### Downloading Node.js and npm

Ensure you have Node.js installed by downloading it from [Node.js website](https://nodejs.org/). Once installed, open your terminal and install TypeScript globally:
```bash
npm install -g typescript
```
To verify the installation and check the TypeScript version, run:

```bash
tsc -v
```
### Using Visual Studio Code

Open Visual Studio Code and let's start by creating our first TypeScript code.

```bash
mkdir hello-world
cd hello-world
code .
```
In Visual Studio Code, create a new file named index.ts.

Compiling TypeScript Code
In your terminal, navigate to your project folder and run the TypeScript compiler (tsc) on your index.ts file:
```bash
tsc index.ts
```
This command will generate an index.js file in the same directory with compiled JavaScript code.

### Configuring the TypeScript Compiler
To configure the TypeScript compiler, run:
```bash
tsc --init
```
This command generates a tsconfig.json file with default settings. You can modify these settings based on your project requirements. Here are some key settings:

- target: Specifies the JavaScript language version for emitted JavaScript.
- rootDir: Defines the root folder within your source files.
- outDir: Specifies an output folder for all emitted files.
- removeComments: Disables emitting comments.
- noEmitOnError: Disables emitting files if any type checking errors are reported.
Now, you can compile all TypeScript files in your project without specifying arguments to tsc.

### Debugging TypeScript Applications
To enable source map generation for easier debugging, set "sourceMap": true in your tsconfig.json file:

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```
This will create source map files for emitted JavaScript files, aiding in debugging TypeScript applications.

## Fundamentals

here we're going to explore the fundamentals of typescript.

### Built-in types
 
 in **JS** :
  - number
  - string
  - boolean
  - null
  - undefined
  - object

  in **TS** :
  - any
  - unknown
  - never
  - enum
  - tuple

**Number**
  ```ts
  let number: number = 123456789;
  //we can separate its digits using an underscore
  let sales: number = 123_456_789;
  ```

  and we have type of number

  ```ts
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  console.log(decimal); // 6
  console.log(hex); // 61453
  console.log(binary); // 10
  console.log(octal); // 484
  ```

  we can do this
  ```ts
  let number = 123456789;
  ```
  and its take that its type is number

  but if we declare like this

  ```ts
  let level;
  ```

  here typescript assumes that this variable is of type any

  so, lets talk about the any type

**Any**

  ```ts
  let level;
  ```

  here ts assumes that level type is **any**
  then we can do this:
   ```ts
  let level;
  level = 1;
  level = 'a';
  ```
  but this against the whole idea of using typescript because we use ts for type safety.
  so as a best practice you should avoid using the any type as much as possible. 

**Arrays**

```ts
let list: number[] = [1, 2, 3];
console.log(list); // [ 1, 2, 3 ]

let list2: Array<number> = [1, 2, 3];
console.log(list2); // [ 1, 2, 3 ]
```

if you try to use this for example

```ts
list.forEach((item) => {item.toFixed});
```

then when you type item. you can see all the properties and methods of number objects, because our editor knows the type of item and it offers code completion.

***this a very nice method***

**tuple**

```ts
  let x: [string, number];
  x = ['hello', 10];
  console.log(x); // [ 'hello', 10 ]
  //x = [10, 'hello']; // Error: Type 'number' is not assignable to type 'string'.
```

**enum**

`enum` represent a list of related constants

```ts
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;
  console.log(c); // 1
  console.log(Color[1]); // Green

```

**functions**

```ts
  function add(x: number, y: number): number {
      return x + y;
  }
  console.log(add(10, 20)); // 30
```

there is an optional parameters that we can use:

```ts
  function buildName(firstName: string, lastName?: string): string {
      if (lastName)
          return firstName + " " + lastName;
      else
          return firstName;
  }
  console.log(buildName("Nada")); // Nada
  console.log(buildName("Nada", "Jaradat")); // Nada Jaradat
```

**objects**

```ts
  let obj: { x: number, y: number } = { x: 10, y: 20 };
  console.log(obj); // { x: 10, y: 20 }
```

and we can use optional:

```ts
  let optObj: { x: number, y?: number } = { x: 10 };
```

we can add `readonly` to the object variable.

### Advanced types
- type aliases
- unions and intersections
- type narrowing 
- nullable types
- the unknown type
- the never type

