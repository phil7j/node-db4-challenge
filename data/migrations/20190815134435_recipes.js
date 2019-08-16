
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();

            tbl
                .string('recipe_name', 255)
                .notNullable()
                .unique();
            tbl
                .text('Instructions')
                .notNullable()
                .unique();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();

            tbl
                .string('name', 128)
                .notNullable()
                .unique();
            tbl
                .text('Description');
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments();

            tbl
                .integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl
                .integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl
                .float('Quantity')
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')

};
