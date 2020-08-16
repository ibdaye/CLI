const readline = require('readline');
const path = require('path');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('name of project? ', function(title){
    const file = 'ReadMe.md'
    rl.question('What are the installations needed for the project? ', function(tools){
        rl.question('what is the use of your project? ', function(Use){
            rl.question("who are the contributors? ", function(contributors){
                console.log(`${title}`);
                fs.writeFileSync(path.join(__dirname,file),"\n"+"# " + title  + "\n")
						        fs.appendFileSync(file, "\n" + "## tools"+ "\n" + tools +"\n")
						        fs.appendFileSync(file, "\n" + "## Use"+ "\n" + Use +"\n")
						        fs.appendFileSync(file, "\n" + "## Contributors"+ "\n" + contributors+"\n")
                rl.close();
            });
        });
    });
    });

    rl.on("close", function(){
        console.log('good');
        process.exit(0);
    });
