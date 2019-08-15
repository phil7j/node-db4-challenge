const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
  };

function getRecipes(){
    db(recipes)
}

function getShoppingList(recipe_id){

}

function getInstructions(recipe_id){

}
