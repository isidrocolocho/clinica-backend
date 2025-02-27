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
      { id:7,group:'Tipo Registro', description: 'Grupo para ver permiso de las tipos de registro', is_active:true, createdAt:new Date()},
      { id:8,group:'Dias', description: 'Grupo para ver los permisos de administracion de dias', is_active:true, createdAt:new Date()},
      { id:9,group:'Especialidades', description: 'Grupos para ver los permisos de administracion de especialidades medicas', is_active:true, createdAt:new Date()},
      { id:10,group:'Hospitales', description: 'Grupo para ver los permisos de administracion de hospitales', is_active:true, createdAt:new Date()},
      { id:11,group:'Medicos', description: 'Grupo para ver los permisos de administracion de los medicos', is_active:true, createdAt:new Date()},
      { id:12,group:'Horarios de Atencion', description: 'Grupo para ver los permisos de los horarios de atencion ', is_active:true, createdAt:new Date()},
      { id:13,group:'Servicios', description: 'Grupo para ver los permisos de los servicios ', is_active:true, createdAt:new Date()},
      { id:14,group:'Estado Agenda', description: 'Grupo para ver los permisos de los estados de la agenda ', is_active:true, createdAt:new Date()},
      { id:15,group:'Agenda Medica ', description: 'Grupo para ver los permisos de la agenda medica', is_active:true, createdAt:new Date()},
      { id:16,group:'Menu Medicos', description: 'Grupo de permisos para ver los menus medicos', is_active:true, createdAt:new Date()},
      { id:17,group:'Menu Pacientes', description: 'Grupo de permisos para ver los menus pacientes', is_active:true, createdAt:new Date()},
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
