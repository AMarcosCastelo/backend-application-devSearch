const { Router } = require('express');
const DevController = require('./Controllers/DevController');
const SearchController = require('./Controllers/SearchController');

const routes = Router();
// Devs
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

// Search
routes.get('/search', SearchController.index);

module.exports = routes;
