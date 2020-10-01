const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Express Demo API!');
});

app.listen(process.env.PORT || 3000);