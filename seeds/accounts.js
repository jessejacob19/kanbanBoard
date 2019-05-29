
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {
          id: 1, 
          userName: 'jessDawg1',
          hashPassword: 'example1',
          name: 'jesse'
        },
        {
          id: 2, 
          userName: 'zozo',
          hashPassword: 'example2',
          name: 'zoe'
        },
        {
          id: 3, 
          userName: 'Raichung',
          hashPassword: 'example3',
          name: 'cliff'
        },
      ]);
    });
};
