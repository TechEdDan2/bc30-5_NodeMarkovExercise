/** Command-line tool to generate Markov text. */
const { MarkovMachine } = require("./markov.js");

if (require.main === module) {
    const fs = require('fs');
    const process = require('process');

    // Read the input text from a file or use a default string
    const inputPath = process.argv[2] || './eggs.txt';

    fs.readFile(inputPath, 'utf8', (error, data) => {
        if (error) {
            console.error(`Error reading file at ${inputPath}: ${error}`);
            process.exit(1);
        } else {
            const mm = new MarkovMachine(data);
            console.log(mm.makeText(100)); // Generate and print 100 words of text
        }
    });
}

