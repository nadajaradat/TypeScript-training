### mini project
to do list application using TypeScript
[How To Build Your First TypeScript Project - TODO List Application](https://www.youtube.com/watch?v=jBmrduvKl5w)
#### steps

```bash
    npm init -y
    npm i --savve-dev typescript
    npx tsc --init
```
initialize two folders one for the src//script.ts
and one for dist//

now we need to add new script to package.json

```batsh
     "scripts": {
        "start": "tsc --watch",
```

and remove the comment for the lines in the tsconfig wiches i menstions in the main readme

main one: "outDir": "./dest",


now in the terminal if we run :

```bash
    npm start
```

then whenever i make a change in the script it will be appear in the dist/script immedietlly.

then we add this in the indes.html file

```bash
    <script src="dest/script.js"></script>
```

until here this is the basic ts setup for any simple project.

enable this and covert it to es6 
    "module": "es6",                                /* Specify what module code is generated. */
