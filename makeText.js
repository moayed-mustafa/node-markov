/** Command-line tool to generate Markov text. */


// console.log(args)
const file = require('fs')
const markov = require("./markov");
const process = require("process");
let args = process.argv
file.readFile(args[2], 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  else {
    const m = new markov.MarkovMachine(data)
    console.log(m.makeText())
  }
})