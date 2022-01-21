'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'User',
      'DepId',
      {
        type: Sequelize,
        references: {
          model: 'Dep',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    );
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'User',
      'DepId'
    );
   
  }
};
