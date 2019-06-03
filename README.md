# NodeJs-TypeScript-Boilerplate
This is simple setup for NodeJs server that uses TypeScript syntactics

## Instructions for setting up typescript to NodeJs:
1. Setup a Node.js project package.json. Use npm init.
2. Add TypeScript (npm install typescript --save-dev).
3. Init a tsconfig.json for TypeScript options with a few key options in your tsconfig.json (npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs)
4. Add this to scripts in package.json (Change server.ts with the starting point of your application) "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec ts-node ./src/server.ts"
}
5. Start application using npm start

### See more [here](https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html)
