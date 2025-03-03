const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port =  5000;

app.use(express.urlencoded({ extended: true })); 

app.use(express.json()); 
// Static Files
app.use(express.static('public'));
// Templating Engine
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
const routes = require('./server/routes/user');
app.use('/', routes);
app.listen(port, () => console.log(`Listening on port ${port}`));