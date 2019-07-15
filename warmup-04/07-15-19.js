'use strict';

const axios = require('axios');

let SWAPI = 'https://swapi.co/api/people/';

function fetchPeopleWithPromises(url) {
  axios(url)
    .then(response => response.data.results)
    .then(people =>
      people.reduce((urls, person) => {
        urls.push(person.url);
        return urls;
      }, [])
    )
    .then(urls => urls.map(url => axios(url)))
    .then(requests => Promise.all(requests))
    .then(responses => responses.map(res => res.data.name))
    .then(names => console.log(names));
}

fetchPeopleWithPromises(SWAPI);

async function fetchPeopleWithAsync(url) {
  let people = await axios(url);

  let requests = people.data.results.map(person => axios(person.url));

  let responses = await Promise.all(requests);

  let names = responses.map(response => response.data.name);

  console.log(names);
}

fetchPeopleWithAsync(SWAPI);
