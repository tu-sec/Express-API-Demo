const express = require('express');
const bodyParser = require('body-parser');  // Required to read request body
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Find the routers
const heroesRouter = require('./routers/heroRouter');
const statusRouter = require('./routers/statusRouter');
app.use('/heroes', heroesRouter);
app.use('/status', statusRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Express Demo API!');
});

app.listen(process.env.PORT || 3000);