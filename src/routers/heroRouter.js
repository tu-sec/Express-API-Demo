const { getHero, getHeroes, createHero, updateHero, deleteHero } = require('../mockDB/heroesDB');
const express = require('express');
const router = express.Router();

/**
 * Gets the whole list of heroes
 */
router.get('/', (req, res)  => {
    res.send(getHeroes());
});

/**
 * Gets one hero
 */
router.get('/:id', (req, res) => {
    res.send(getHero(req.params.id));
});

/**
 * Adds one hero to the list of heroes
 */
router.post('/', (req, res) => {
    createHero(req.body);
    res.sendStatus(201);
});

/**
 * Updates one hero in the list of heroes
 */
router.patch('/:id', (req, res) => {
    updateHero(req.params.id, req.body);
    res.sendStatus(200);
});

/**
 * Deletes one hero in the list of heroes
 */
router.delete('/:id', (req, res) => {
    deleteHero(req.params.id);
    res.sendStatus(204);
});

module.exports = router;