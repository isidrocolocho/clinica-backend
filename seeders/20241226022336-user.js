'use strict';
const bcrypt = require('bcrypt');
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

    // Obtener las contraseñas desde las variables de entorno o usar las predeterminadas
    const adminEmail = process.env.SEEDER_USER_ADMIN || 'admin@admin.com';
    const adminPassword = process.env.SEEDER_PASSWORD_ADMIN || '4dm1n123';
    const superAdminEmail = process.env.SEEDER_USER_SUPER_ADMIN || 'superadmin@admin.com';
    const superAdminPassword = process.env.SEEDER_PASSWORD_SUPER_ADMIN || '4dm1n123';

    // Encriptar las contraseñas
    const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);
    const hashedSuperAdminPassword = await bcrypt.hash(superAdminPassword, 10);
    const hashedTesterPassword = await bcrypt.hash('Test123', 10);

    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'Super Administrador',
        email: superAdminEmail,
        password: hashedSuperAdminPassword,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        username: 'Administrador',
        email: adminEmail,
        password: hashedAdminPassword,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        username: 'Tester',
        email: 'test@test.com',
        password: hashedTesterPassword,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('users', null, {});
  }
};
