/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/)
    this.words = words.filter(c => c !== "" );
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chain = {}

    for (let i = 0; i < this.words.length; i++){

    let values = this.getValues(i,this.words[i], this.words)
      let word = this.words[i]

      if (!(word in chain)) {
        chain[word] = values
      }

    }
    // console.log(chain)
    return chain

  }
  makeText(numWords = 50) {
    // TODO
    let chain = this.makeChains()
    let sentence = ''
    for (let i = 0; i < numWords; i++){
      let randKey = Math.floor(Math.random() * this.words.length)
      let word = this.words[randKey]
      let wordVal = this.pickFromWordValues(chain[word])
      if (!wordVal) {
        i --
      }
      else {
        sentence += wordVal + ' '
      }
    }
    console.log(sentence)
  }
  getValues(index,value, array) {
    let values = []
    for (let i = index; i < array.length; i++){
      if (array[i] == value) {
        i + 1== array.length? values.push(null):values.push(array[i + 1])
      }
    }
    return values
  }

  pickFromWordValues(arr) {
    let random = Math.floor(Math.random() * arr.length)
    return arr[random]
  }
/** return random text from chains */

}

args = process.argv
console.log(args)
const file = require('fs')
file.readFile(args[2], 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  else {
    const m = new MarkovMachine(data)
    m.makeText()
  }
})
module.exports = MarkovMachine

