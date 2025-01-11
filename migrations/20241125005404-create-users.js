'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users', 
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          comment: 'Primary key, auto-incremented'
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: 'User login name'
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          comment: 'User email address'
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: 'Encrypted user password'
        },
        token: {
          type: Sequelize.STRING,
          allowNull: true,
          comment: 'Authentication token'
        },
        refreshToken: {
          type: Sequelize.STRING,
          allowNull: true,
          comment: 'Refresh token for renewing authentication'
        },
        is_active: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
          comment: 'Indicates if the user account is active'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          comment: 'Timestamp for when the record was created'
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE,
          comment: 'Timestamp for when the record was last updated'
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
          comment: 'Timestamp for soft deletion'
        },
        id_user: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          comment: 'References the parent user ID for hierarchical relationships'
        },
      },
      {
        comment: 'Table to store user information' // Comment for the table
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
