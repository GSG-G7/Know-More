const path = require('path');

const express = require('express');

const exphs = require('express-handlebars');

const routes = require('./routes/index');

const helpers = require('./views/helpers/index');

const PORT = process.env.PORT || 5000;

const app = express();
app.set('port', PORT);
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(routes);
app.engine(
  'hbs',
  exphs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers,
  }),
);

module.exports = app;
