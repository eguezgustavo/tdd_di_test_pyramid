const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const { getJoke, getTwoJokes } = require('../src/joke-adapter');

describe('joke-adapter', () => {

  it('gets a random joke from the API', async () => {
    const joke = await getJoke();
    expect(joke.text).to.be.a('string');
  });

  it('caches the joke', async() => {
    await getJoke();
    
    const jokes = fs.readFileSync('./cached-jokes');
    expect(jokes).to.be.instanceof(Buffer);
  });

  it('fetches two jokes and append its contents to the cache file', async() => {
    const jokes = await getTwoJokes();
    
    const cached_jokes = fs.readFileSync('./cached-two-jokes');
    expect(jokes).to.have.lengthOf(2);
    expect(cached_jokes).to.be.instanceof(Buffer);
  })
});
