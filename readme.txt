TypeScript is an open-source programming language developed and maintained by Microsoft. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds optional static typing, classes, interfaces, and other features to JavaScript that make it easier to write and maintain large-scale applications.
One of the key features of TypeScript is its static typing system.This allows developers to catch errors at compile-time rather than runtime, which can make debugging and testing easier.
TypeScript is a compiled language, which means that it needs to be compiled or transpiled to Javascript before it can run. The TypeScript compiler is a command-line tool that takes TypeScript code as inputs and outputs JavaScript code that can be run in a browser or on a server.

### Steps:

1.Install node packages(here, only typescript)
```bash
$ npm i typescript
```
2.Typescript Code Run 
```bash
$ npm run ts <file_name.ts>
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Note: compiled JS file will output in dist folder
Note: If the problem addressing "duplicatte function implementation" occurs, add "export {}" at the start of your code.
