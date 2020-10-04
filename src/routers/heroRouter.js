const { getHero, getHeroes, createHero, updateHero, deleteHero } = require('../mockDB/heroesDB');
const express = require('express');
const router = express.Router();

router.get('/', (req, res)  => {
    res.send(getHeroes());
});

router.get('/:id', (req, res) => {
    res.send(getHero(req.params.id));
});

router.post('/', (req, res) => {
    createHero(req.body);
    res.sendStatus(201);
});

router.patch('/:id', (req, res) => {
    updateHero(req.params.id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    deleteHero(req.params.id);
    res.sendStatus(204);
});

module.exports = router;