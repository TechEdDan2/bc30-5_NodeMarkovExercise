/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = {};
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} 
   * 
   */

  makeChains() {
    for (let i = 0; i < this.words.length; i++) {

      let word = this.words[i];
      let nextWord;
      // If the next word exists, assign it; otherwise, assign null
      if (this.words[i + 1] !== undefined && this.words[i + 1] !== null) {
        nextWord = this.words[i + 1];
      } else {
        nextWord = null;
      }

      // If the word is not already a key in chains, initialize it with an empty array
      if (!this.chains[word]) {
        this.chains[word] = [];
      }
      // Push the next word into the array for the current word
      this.chains[word].push(nextWord);
    }
  }


  /** 
   * return random text from chains 
   */

  makeText(numWords = 100) {
    let outputText = [];
    let startWords = Object.keys(this.chains).filter(key => this.chains[key].length > 0);
    let word = startWords[Math.floor(Math.random() * startWords.length)];
    outputText.push(word);

    while (outputText.length < numWords) {
      let nextWords = this.chains[word];
      if (!nextWords || nextWords.length === 0 || word === null) {
        word = startWords[Math.floor(Math.random() * startWords.length)];
        outputText.push(word);
        continue;
      }
      word = nextWords[Math.floor(Math.random() * nextWords.length)];
      if (word !== null) {
        // Add the word to the output text
        outputText.push(word);
      }

    }

    return outputText.join(" ");
  }

} // End of MarkovMachine class

module.exports = { MarkovMachine };

// Example usage for testing
// if (require.main === module) {
//   let mm = new MarkovMachine("the quick brown fox jumps over the lazy brown dog");
//   console.log(mm);
//   console.log(mm.makeText(15));
//}
