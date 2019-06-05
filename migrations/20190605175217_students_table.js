
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(tbl) {

        tbl.increments();

        // a varchar called name, 128, unique, not null
        tbl
        .string('name', 128)
        .notNullable()
        .unique();

        // syntax for a foreign key
        tbl
        .integer('cohort_id')
        .unsigned()
        .references('id')
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  
};
