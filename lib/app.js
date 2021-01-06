const express = require('express');
const app = express();
const Route = require('./models/route');

app.use(express.json());

app.use('/api/v1/routes', require('./controllers/routes'));

app.use('/api/v1/users', require('./controllers/users'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
