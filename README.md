# bc#30-5 Node Markov Exercise

## Table of Contents

- [Overview](#overview)
    - [Setup Instructions](#setup-instructions)
    - [Usage](#usage-example)
    - [Testing](#testing)
- [My Process](#my-process)
    - [File Structure](#file-structure)
    - [Built With](#built-with)
- [Author](#author)
- [Acknowledgements](#acknowledgments)
- [License](#license)

## Overview
In this exercise, it was an opportunity to create an algorithm for generating realistic machine-made text from an original source text.

### Setup Instructions
1. Clone the repository to your local machine using `git clone
2. Navigate to the project directory using `cd node-markov`
3. Install the required dependencies by running `npm install`
4. Run the application using `node makeText.js`

### Usage Example
Here is an example of how to use the Markov chain text generator:

```bash
node makeText.js eggs.txt 50
```

This command will read the `sample.txt` file and generate 50 words of text based on the Markov chain algorithm applied to the content of the file. The generated text will be printed to the console.

### Testing
To test the functionality of the Markov chain text generator, you can use jest testing framework. First, ensure you have jest installed. Then run the following command in your terminal:

```bash
jest markov.test.js
``` 

## My Process
This project was a great opportunity to practice my JavaScript skills, particularly with algorithms and data structures in Node.js. The goal was to create a Markov chain text generator that could produce text based on a given source text.

### File Structure
```
node-markov/
├── makeText.js
├── markov.js
├── package.json
├── package-lock.json
└── README.md
```

### Built With
- JavaScript
- Node.js
- Markov Chains Algorithm
- npm (Node Package Manager)
- File System Module (fs)
- Path Module (path)


## Author
- Github - [TechEdDan2](https://github.com/TechEdDan2)
- Frontend Mentor - [@TechEdDan2](https://www.frontendmentor.io/profile/TechEdDan2)

## Acknowledgments
The YouTubers and other educational resources I have been learning from include: Coder Coder (Jessica Chan), BringYourOwnLaptop (Daniel Walter Scott), Kevin Powell, vairous Udemy courses, Geeks for Geeks, and Stony Brook University's Software Engineering Bootcamp (curriculum developed in partnership with Colt Steele) 

## License
This project is licensed under ISC License 