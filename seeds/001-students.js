
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
  .truncate()
  .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Kimberlee', cohort_id: 1},
        { name: 'jeremy', cohort_id: 1},
        { name: 'cori', cohort_id: 1}
      ]);
    });
};
