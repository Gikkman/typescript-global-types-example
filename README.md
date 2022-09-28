# typescript-global-types-example
Small example repo for showing how to declare global types in a Typescript project (i.e. don't require imports of them)

# Basics
From the [Typescript docs](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html#global-libraries), it is explained that _"A global library is one that can be accessed from the global scope (i.e. without using any form of import)"_. For me at least, this is very convenient when it comes to certain type declarations. 

From the docs again, it is implied that a global declaration cannot use:
- `require` statements
- `import` statements
- `define` statements
- `export` statements

So basically, as long as the file contains one or more type declarations and no exports and/or imports, that type will be available.

# Running
Install the dependencies: `npm install`

Compile: `npm run compile`

Run compiled: `npm run run`

Run via ts-node: `npm run ts`