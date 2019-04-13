'use strict';

const superagent = require('superagent');

const fetchPeopleWithPromises = () => {
  return superagent.get('https://swapi.co/api/people/')
    .then(response => {
      const urls = response.body.results.map(character => {return character.url});

      // Creates an array of Promises
      const requests = urls.map(url => Promise.resolve(superagent.get(url)))

      // Resolves a single Promise when the array of Promises have resolved
      return Promise.all(requests)
        .then(responses => {
          const names = responses.map(response => response.body.name)
          console.log(names);
        })
    })

    .catch(() => console.error(`These aren't the droids you're looking for…`));
}
fetchPeopleWithPromises();
