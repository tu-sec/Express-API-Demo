const heroes = []; // List of our heroes

/**
 * Gets all the heroes that have been created
 */
function getHeroes() {
    return heroes;
}

/**
 * Gets a single hero from the array by their id if they  exist
 * @param {*} id the id of the hero
 */
function getHero(id) {
    return heroes.find(hero => hero.id === id);
}

/**
 * Adds a hero to the array
 * @param {*} hero the hero to add
 */
function createHero(hero) {
    heroes.push(hero);
}

/**
 * Updates a hero in the array
 * @param {*} id the id of the hero to update
 * @param {*} hero the updates to be made to the hero
 */
function updateHero(id, hero) {
    const index = heroes.findIndex(hero => hero.id === id);
    if (index !== -1) {
        heroes[index] = hero;
    }
}

/**
 * Removes a hero from the array
 * @param {*} id the id of the hero to remove
 */
function deleteHero(id) {
    const index = heroes.findIndex(hero => hero.id === id);
    heroes.splice(index, 1);
}

module.exports = { getHeroes, getHero, createHero, updateHero, deleteHero }