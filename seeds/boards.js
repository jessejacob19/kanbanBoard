
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {
          id: 101, 
          name: 'todo doing done', 
          accountId: 21
        },
        {
          id: 102, 
          name: 'doing', 
          accountId: 21
        },
        {
          id: 103, 
          name: 'done', 
          accountId: 21
        }
      ]);
    });
};
