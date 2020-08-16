#!/usr/bin/env node

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the name of your project ? ", function(name) {
    rl.question("what is the github repo of the project ? ", function(repo) {
        rl.question("who are the contributors of the project ? ", function(crtbutrs) {
          console.log(`${name}, with github repo ${repo}, and the following as contributors ${crtbutrs}`);
          rl.close();
        });
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});