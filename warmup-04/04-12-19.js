'use strict';

const superagent = require('superagent');
const swapi = 'https://swapi.co/api/people/'

const fetchPeopleWithPromises = () => {
  // Use superagent to load content from the Star Wars API
  return superagent.get(swapi)

    .then(response => {
      // Reduce the results array (an array of people objects) into an simpler array of urls from the person’s url property
      // Go through that array, fetching each person’s data with superagent, building up an array of promises
      return response.body.results.map(character => superagent.get(character.url))
    })

    // Use promise.all to collect all of the responses at once.
    .then(requests => Promise.all(requests))

    // When all of the promises have resolved, print a list of each person’s name
    .then(responses => console.log(responses.map(response => response.body.name)))

    .catch(err => console.log(err.message));
};
// fetchPeopleWithPromises()

const fetchPeopleWithAsync = async () => {
let characters = await superagent.get(swapi);

let requests = characters.body.results.map(character => superagent.get(character.url));

const responses = await Promise.all(requests);

console.log(responses.map(response => response.body.name));

}
fetchPeopleWithAsync();
