'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const rolPermissionData = [
      { id: 1, id_rol: 2, id_permission: 1, createdAt: new Date() },
      { id: 2, id_rol: 2, id_permission: 2, createdAt: new Date() },
      { id: 3, id_rol: 2, id_permission: 3, createdAt: new Date() },
      { id: 4, id_rol: 2, id_permission: 4, createdAt: new Date() },
      { id: 5, id_rol: 2, id_permission: 5, createdAt: new Date() },
      { id: 6, id_rol: 2, id_permission: 6, createdAt: new Date() },
      { id: 7, id_rol: 2, id_permission: 7, createdAt: new Date() },
      { id: 8, id_rol: 2, id_permission: 8, createdAt: new Date() },
      { id: 9, id_rol: 2, id_permission: 9, createdAt: new Date() },
      { id: 10, id_rol: 2, id_permission: 10, createdAt: new Date() },
      { id: 11, id_rol: 2, id_permission: 11, createdAt: new Date() },
      { id: 12, id_rol: 2, id_permission: 12, createdAt: new Date() },
      { id: 13, id_rol: 2, id_permission: 13, createdAt: new Date() },
      { id: 14, id_rol: 2, id_permission: 14, createdAt: new Date() },
      { id: 15, id_rol: 2, id_permission: 15, createdAt: new Date() },
      { id: 16, id_rol: 2, id_permission: 16, createdAt: new Date() },
      { id: 17, id_rol: 2, id_permission: 17, createdAt: new Date() },
      { id: 18, id_rol: 2, id_permission: 18, createdAt: new Date() },
      { id: 19, id_rol: 2, id_permission: 24, createdAt: new Date() },
      { id: 20, id_rol: 2, id_permission: 25, createdAt: new Date() },
      { id: 21, id_rol: 2, id_permission: 26, createdAt: new Date() },
      { id: 22, id_rol: 2, id_permission: 32, createdAt: new Date() },
      { id: 23, id_rol: 2, id_permission: 41, createdAt: new Date() },
      { id: 24, id_rol: 3, id_permission: 1, createdAt: new Date() },
      { id: 25, id_rol: 3, id_permission: 2, createdAt: new Date() },
      { id: 26, id_rol: 3, id_permission: 3, createdAt: new Date() },
      { id: 27, id_rol: 3, id_permission: 4, createdAt: new Date() },
      { id: 28, id_rol: 3, id_permission: 5, createdAt: new Date() },
      { id: 29, id_rol: 3, id_permission: 6, createdAt: new Date() },
      { id: 30, id_rol: 3, id_permission: 7, createdAt: new Date() },
      { id: 31, id_rol: 3, id_permission: 8, createdAt: new Date() },
      { id: 32, id_rol: 3, id_permission: 9, createdAt: new Date() },
      { id: 33, id_rol: 3, id_permission: 10, createdAt: new Date() },
      { id: 34, id_rol: 3, id_permission: 11, createdAt: new Date() },
      { id: 35, id_rol: 3, id_permission: 12, createdAt: new Date() },
      { id: 36, id_rol: 3, id_permission: 13, createdAt: new Date() },
      { id: 37, id_rol: 3, id_permission: 14, createdAt: new Date() },
      { id: 38, id_rol: 3, id_permission: 15, createdAt: new Date() },
      { id: 39, id_rol: 3, id_permission: 16, createdAt: new Date() },
      { id: 40, id_rol: 3, id_permission: 17, createdAt: new Date() },
      { id: 41, id_rol: 3, id_permission: 18, createdAt: new Date() },
      { id: 42, id_rol: 3, id_permission: 19, createdAt: new Date() },
      { id: 43, id_rol: 3, id_permission: 20, createdAt: new Date() },
      { id: 44, id_rol: 3, id_permission: 21, createdAt: new Date() },
      { id: 45, id_rol: 3, id_permission: 22, createdAt: new Date() },
      { id: 46, id_rol: 3, id_permission: 23, createdAt: new Date() },
      { id: 47, id_rol: 3, id_permission: 24, createdAt: new Date() },
      { id: 48, id_rol: 3, id_permission: 25, createdAt: new Date() },
      { id: 49, id_rol: 3, id_permission: 26, createdAt: new Date() },
      { id: 50, id_rol: 3, id_permission: 27, createdAt: new Date() },
      { id: 51, id_rol: 3, id_permission: 28, createdAt: new Date() },
      { id: 52, id_rol: 3, id_permission: 29, createdAt: new Date() },
      { id: 53, id_rol: 3, id_permission: 30, createdAt: new Date() },
      { id: 54, id_rol: 3, id_permission: 31, createdAt: new Date() },
      { id: 55, id_rol: 3, id_permission: 32, createdAt: new Date() },
      { id: 56, id_rol: 3, id_permission: 33, createdAt: new Date() },
      { id: 57, id_rol: 3, id_permission: 34, createdAt: new Date() },
      { id: 58, id_rol: 3, id_permission: 35, createdAt: new Date() },
      { id: 59, id_rol: 3, id_permission: 36, createdAt: new Date() },
      { id: 60, id_rol: 3, id_permission: 37, createdAt: new Date() },
      { id: 61, id_rol: 3, id_permission: 38, createdAt: new Date() },
      { id: 62, id_rol: 3, id_permission: 39, createdAt: new Date() },
      { id: 63, id_rol: 3, id_permission: 40, createdAt: new Date() },
      { id: 64, id_rol: 3, id_permission: 41, createdAt: new Date() },
    ];
    await queryInterface.bulkInsert('rols_permissions', rolPermissionData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('rols_permissions', null, {});
  }
};
