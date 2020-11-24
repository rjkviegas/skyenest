const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => res.render('about'));

app.use('404', (req, res) => {
    res.status(404);
    res.render('404');
});

app.use('500', (err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render('500');
});

module.exports = app;