
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
    // .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Mac and Cheese', instructions: 'Put in Microwave for 3minutes, let stand for 1 minute before eating'},
        {recipe_name: 'Mommas Corn Bread', instructions: 'Ask mom for some of her famous corn bread'},
        {recipe_name: 'Panda Express Special', instructions: 'Drive Thru at panda and order your favorite dish'},

      ]);
    }
    // )};
