const heroes = [];

function getHeroes() {
    return heroes;
}

function getHero(id) {
    return heroes.find(hero => hero.id === id);
}

function createHero(hero) {
    heroes.push(hero);
}

function updateHero(id, hero) {
    const index = heroes.findIndex(hero => hero.id === id);
    if (index !== -1) {
        heroes[index] = hero;
    }
}

function deleteHero(id) {
    const index = heroes.findIndex(hero => hero.id === id);
    heroes.splice(index, 1);
}

module.exports = { getHeroes, getHero, createHero, updateHero, deleteHero }