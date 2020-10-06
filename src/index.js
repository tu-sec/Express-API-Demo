const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up dotenv so we can use the .env file
dotenv.config();

// Body parser packaged required to get the body of requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// The routers of the app
const heroesRouter = require('./routers/heroRouter');
const statusRouter = require('./routers/statusRouter');
app.use('/heroes', heroesRouter);
app.use('/status', statusRouter);

// Initial base route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Demo API!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`API is listening on port ${process.env.PORT || 3000}`);
});