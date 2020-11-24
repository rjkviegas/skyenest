const express = require('express');
const expressHandlebars = require('express-handlebars');
const handlers = require('./handlers');

const app = express();

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.use(handlers.notFound);

app.use(handlers.serverError);

module.exports = app;