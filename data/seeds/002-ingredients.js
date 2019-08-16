
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
    // .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Cheddar Cheese', description: 'Typical walmart cheddar'},
        {name: 'corn', description: 'canned corn from walmart'},
        {name: 'bejing beef', description: 'yummy spice beef'},

      ]);
    }
    // )};
