
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1, 
          name: 'todo', 
          description: 'tasks that need to be done',
          accountId: 21
        },
        {
          id: 2, 
          name: 'doing', 
          description: 'tasks that are being done',
          accountId: 21
        },
        {
          id: 3, 
          name: 'done', 
          description: 'tasks that are done',
          accountId: 21
        },
      ]);
    });
};
