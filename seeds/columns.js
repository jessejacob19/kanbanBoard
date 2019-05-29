
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('columns').del()
    .then(function () {
      // Inserts seed entries
      return knex('columns').insert([
        {
          id: 201, 
          name: 'todo',
          boardId: 101,
          position: "(0,0)",
          width: 2,
          height: 10
        },
        {
          id: 202, 
          name: 'doing',
          boardId: 101,
          position: "(3,0)",
          width: 2,
          height: 10
        },
        {
          id: 203, 
          name: 'done',
          boardId: 101,
          position: "(5,0)",
          width: 2,
          height: 10
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