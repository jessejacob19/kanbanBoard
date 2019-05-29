
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('columns').del()
    .then(function () {
      // Inserts seed entries
      return knex('columns').insert([
        {
          id: 101, 
          boardId: 1
        },
        
      ]);
    });
};

// {
//   id: 1, 
//   name: 'todo', 
//   description: 'tasks that need to be done',
//   accountId: 21
// },
// {
//   id: 2, 
//   name: 'doing', 
//   description: 'tasks that are being done',
//   accountId: 21
// },
// {
//   id: 3, 
//   name: 'done', 
//   description: 'tasks that are done',
//   accountId: 21
// }