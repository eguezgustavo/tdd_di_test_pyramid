const getJoke = async () => {
  return new Promise((r) => r('This is a Chuck Norris Joke'));
};

const getTwoJoke = async () => {
  return new Promise((r) => r([
    'This is a Chuck Norris Joke',
    'This is another Chuck Norris Joke',
  ]));
};
