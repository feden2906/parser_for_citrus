const fs = require('fs').promises;

fs.readFile('./movies.txt').then(i => {
  const fields = ['Title', 'Release Year', 'Format', 'Stars']
  const movies = [];
  let movieBuffer = {};

  i.toString().split('\n').forEach(string => {

    const arrayFromStr = string.split(': ');
    if (arrayFromStr.length <= 1) {
      movies.push(movieBuffer);
      movieBuffer = {};
      return;
    }
    if (fields.includes(arrayFromStr[0])) {
      movieBuffer[arrayFromStr[0].charAt(0).toLowerCase() + arrayFromStr[0].slice(1).split(' ').join('')]  = arrayFromStr[1];
    }

  })

  return movies;
}).then(movies => console.log(movies))
