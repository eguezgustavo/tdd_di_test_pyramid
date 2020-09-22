const axios = require('axios');
const fs = require('fs');

const JOKE_API_URL = 'https://api.chucknorris.io/jokes/random'
const CACHE_FILE = './cached-jokes'
const TWO_JOKES_CACHE_FILE = './cached-two-jokes'

const getJoke = async () => {
  const randomJoke = await axios.get(JOKE_API_URL);
  await fs.writeFileSync(CACHE_FILE, randomJoke.data.value);

  return {
    text: randomJoke.data.value
  }
};

const getTwoJokes = async() => {
  const joke1 = await axios.get(JOKE_API_URL);
  const joke2 = await axios.get(JOKE_API_URL);

  await fs.writeFileSync(TWO_JOKES_CACHE_FILE, `${joke1.data.value}\n${joke2.data.value}`);
  return [ { text: joke1.data.value }, { text: joke2.data.value } ];
};

module.exports = {
  getJoke,
  getTwoJokes,
}
