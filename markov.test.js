// Importing the MarkovMachine class for testing
const { MarkovMachine } = require("./markov.js");

// Jest test suite for the MarkovMachine class
describe("Testing the MarkovMachine class with a hardcoded text", () => {
    // Creating an instance of MarkovMachine before each test
    let mm;
    beforeEach(() => {
        console.log("BEFORE EACH!");
        mm = new MarkovMachine("the quick brown fox jumps over the lazy brown dog");
    });

    // Test to ensure the MarkovMachine instance is created correctly
    test("Should create an instance of MarkovMachine", () => {
        expect(mm).toBeInstanceOf(MarkovMachine);
    });

    // Check if the chains are created correctly with the hardcoded text
    test("Check to see if chains are created correctly", () => {
        expect(mm.chains).toEqual({
            the: ["quick", "lazy"],
            quick: ["brown"],
            brown: ["fox", "dog"],
            fox: ["jumps"],
            jumps: ["over"],
            over: ["the"],
            lazy: ["brown"],
            dog: [null]
        });
    });

    // Test to ensure the makeText method generates text with the correct number of words
    test("Should generate text with the correct number of words", () => {
        const text = mm.makeText(10);
        const words = text.split(" ");
        expect(words.length).toBe(10);
    });

    // Test to ensure the generated text is a string that contains words from the original input
    test("Should generate text that contains words from the original input", () => {
        const text = mm.makeText(10);
        const words = text.split(" ");
        words.forEach(word => {
            expect(mm.chains).toHaveProperty(word);
        });
    });
});

// Testing the MarkovMachine class with a longer text that is read from a file
describe("Testing the MarkovMachine class with a longer text", () => {
    let mm;

    beforeAll(() => {
        const fs = require('fs');
        const text = fs.readFileSync('./eggs.txt', 'utf8');
        mm = new MarkovMachine(text);
    });

    // Test to ensure the MarkovMachine instance is created correctly
    test("Should create an instance of MarkovMachine with longer text", () => {
        expect(mm).toBeInstanceOf(MarkovMachine);
    });

    // Check the some of the words from the read file appear in the chain as keys
    test("Check to see if chains have the expected words", () => {
        expect(mm.chains).toHaveProperty("eggs");
        expect(mm.chains).toHaveProperty("Sam");
        expect(mm.chains).toHaveProperty("green");
    });
});