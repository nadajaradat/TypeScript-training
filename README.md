# TypeScript Training

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
