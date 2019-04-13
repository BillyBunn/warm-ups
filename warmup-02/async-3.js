'use strict';

const superagent = require('superagent');
const swapi = 'https://swapi.co/api/people/'

const fetchPeopleWithAsync = async () => {
  let peopleSet = await superagent.get(swapi);

  const people = peopleSet.body.results || [];

  const peopleRequests = people.map(person => {
    return superagent.get(person.url);
  });

  const names = await Promise.all(peopleRequests)
    .then(people => {
      let names = [];
      for (let person of people) {
        names.push(person.body.name);
      }
      return names;
    });
  return names;
};
fetchPeopleWithAsync()