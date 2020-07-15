const {MarkovMachine} = require('./markov')

// instantiate the clss before running all tests:

describe('Testing the Markov machine calss', function () {

    beforeAll(() => {
        text = `The voice was growing fainter.
         Harry was sure it was moving away - moving upward.
        A mixture of fear and excitement gripped him as he stared at the dark ceiling;
        how could it be moving upward ? Was it a phantom,
        to whom stone ceilings didn't matter ?`
        markov = new MarkovMachine(text)
        chain = markov.makeChains()
        // console.log(markov)
        // return markov
    })

    test('test that markov class turns the text into a list of words. ', () => {
    expect(markov.words).toContain('could')
    })

    test('test that markov machine creates a chain of words.', () => {
        const val = chain['The']
        expect(val).toEqual(['voice'])
    })

    test('test the markov generated text', () => {
        const mText = markov.makeText()
        expect(mText).toEqual(expect.any(String))
    })
})



