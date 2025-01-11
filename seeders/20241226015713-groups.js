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
    const groupsData = [
      {
        id: 1,
        group: 'Usuarios',
        description: 'Grupo para ver los permisos de la administración de usuarios',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        group: 'Roles',
        description: 'Grupo para ver los permisos de la administración de roles',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        group: 'Grupos',
        description: 'Grupo para ver los permisos de la administración de grupos',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        group: 'Permisos',
        description: 'Grupo para ver los permisos de la administración de permisos',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        group: 'Rutas Frontend',
        description: 'Grupo para ver los permisos de la administración de rutas de frontend',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        group: 'Dashboard',
        description: 'Grupo para ver los permisos de la administración del dashboard',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insertar datos en la tabla mnt_groups
    await queryInterface.bulkInsert('mnt_groups', groupsData, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('mnt_groups', null, {});
  }
};
