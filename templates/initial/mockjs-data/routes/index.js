const film = require('./film');
const person = require('./person');
const vote = require('./vote');

module.exports = (app) => {
  app.use('/api/film', film);
  app.use('/api/person', person);
  app.use('/api/vote', vote);
};
