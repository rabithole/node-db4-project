const express = require('express');

const recipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json()); // express middleware
server.use('/api/recipes', recipeRouter);

// endpoints

server.get('/', (req, res) => {
  res.send('Something is about to happen here!');
});

module.exports = server;