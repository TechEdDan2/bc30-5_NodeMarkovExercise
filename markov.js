/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} 
   * 
   */

  makeChains() {
    this.chains = {};
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


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}
