'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = Date.now();
    await queryInterface.bulkInsert('users', 
    [
      {
        name: 'Super Admin',
        email: 'super@admin.com',
        password: '123123',
        role: 'super_admin',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Celso Lisboa',
        email: 'celsolisboa@admin.com',
        password: '123123',
        role: 'admin',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Amanda Nogueira',
        role: 'role',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Fernando Gonçalves',
        role: 'role',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Jaqueline Zuboski',
        role: 'role',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Jamau Alexandre',
        role: 'role',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Rosana Rodrigues',
        role: 'role',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Regina César',
        role: 'role',
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
