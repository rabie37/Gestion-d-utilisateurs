'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'Dep',
      'UserId',
      {
        type: Sequelize,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    );
   
  },
  

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Dep',
      'UserId'
    );
   
  
  }
};
