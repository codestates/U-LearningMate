'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'score', 
    { type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false });
    await queryInterface.addColumn('Users', 'oauth', Sequelize.INTEGER, { after: 'score' });    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
