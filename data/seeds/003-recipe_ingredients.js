
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
    // .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id:1 , Quantity: 2.5},
        {recipe_id: 2, ingredient_id:2 , Quantity: 1.2},
        {recipe_id: 3, ingredient_id:3 , Quantity: 1.4},

      ]);
    }
    // )};