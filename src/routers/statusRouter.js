const express = require('express');
const router = express.Router();

// Everything is ok
router.get('/200', (req, res)  => {
    res.sendStatus(200);
});

// Something was created
router.get('/201', (req, res)  => {
    res.sendStatus(201);
});

// No content (update or delete request)
router.get('/204', (req, res)  => {
    res.sendStatus(204);
});

// Something in the request was bad (route params or body)
router.get('/400', (req, res)  => {
    res.sendStatus(400);
});

// User isn't logged in
router.get('/401', (req, res) => {
    res.sendStatus(401);
});

// User is logged in but can't acces the route (admin route only)
router.get('/403', (req, res) => {
    res.sendStatus(403);
});

// Our API messed something up
router.get('/500', (req, res) => {
    res.sendStatus(500);
});

module.exports = router;