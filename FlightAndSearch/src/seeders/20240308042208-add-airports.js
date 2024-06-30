'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name: 'Jolly Grant Airport',
        cityId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jolly2 Grant Airport',
        cityId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jolly3 Grant Airport',
        cityId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indra Gandhi Airport',
        cityId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
