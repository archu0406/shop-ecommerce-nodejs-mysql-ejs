require('rootpath')();
const express = require('express');
const app = express();
const errorHandler = require('_middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// api routes
app.use(express.static('public'));
app.use('/css', express.static(__dirname+ 'public/styles'));
app.use('/js', express.static(__dirname+ 'public/js'));
app.use('/img', express.static(__dirname+ 'public/img'));

app.get('', (req, res) => {
    res.render('index.ejs');
})

app.get('/create', (req, res) => {
    res.render('create.ejs');
})

app.get('/edit/:id', (req, res) => {
    res.render('edit.ejs');
})

app.use('/items', require('./items/items.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));