/**
 * mockjs 官网
 * http://mockjs.com/
 */
const film = require('./film');
const vote = require('./vote');
const person = require('./person');

module.exports = {
  filmAll: film.all,
  filmPopularity: film.popularity,
  topics: vote.topics,
  person
};
