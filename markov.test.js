MarkovMachine = require('./markov')
describe('testing markov', function () {
    test('ok now', function () {
        const m = new MarkovMachine('my name is ')
        console.log(m.makeChains())
        expect(m.words).toContain('my')
    })
  })