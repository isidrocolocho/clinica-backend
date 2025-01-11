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
    const permissionsData = [
      { id:1,id_group:1, permission:'listar_usuarios' ,description: 'Listar los usuarios', is_active:true, createdAt:new Date()},
      { id:2,id_group:1, permission:'mostrar_usuario' ,description: 'Mostrar un usuario', is_active:true, createdAt:new Date()},
      { id:3,id_group:1, permission:'crear_usuario' ,description: 'Crear usuarios', is_active:true, createdAt:new Date()},
      { id:4,id_group:1, permission:'actualizar_usuario' ,description: 'Actualizar usuario', is_active:true, createdAt:new Date()},
      { id:5,id_group:1, permission:'desactivar_usuario' ,description: 'Desactivar usuario', is_active:true, createdAt:new Date()},
      { id:6,id_group:1, permission:'activar_usuario' ,description: 'Activar usuario', is_active:true, createdAt:new Date()},
      { id:7,id_group:1, permission:'borrar_usuario' ,description: 'Borrar usuario', is_active:true, createdAt:new Date()},
      { id:8,id_group:1, permission:'menu_usuario' ,description: 'Mostrar en menu gestion de usuario', is_active:true, createdAt:new Date()},
      { id:9,id_group:2, permission:'listar_roles' ,description: 'Listar los roles', is_active:true, createdAt:new Date()},
      { id:10,id_group:2, permission:'mostrar_rol' ,description: 'Mostrar un rol', is_active:true, createdAt:new Date()},
      { id:11,id_group:2, permission:'crear_rol' ,description: 'Crear roles', is_active:true, createdAt:new Date()},
      { id:12,id_group:2, permission:'actualizar_rol' ,description: 'Actualizar rol', is_active:true, createdAt:new Date()},
      { id:13,id_group:2, permission:'desactivar_rol' ,description: 'Desactivar rol', is_active:true, createdAt:new Date()},
      { id:14,id_group:2, permission:'activar_rol' ,description: 'Activar rol', is_active:true, createdAt:new Date()},
      { id:15,id_group:2, permission:'borrar_rol' ,description: 'Borrar rol', is_active:true, createdAt:new Date()},
      { id:16,id_group:2, permission:'menu_rol' ,description: 'Mostrar en menu gestion de rol', is_active:true, createdAt:new Date()},
      { id:17,id_group:3, permission:'listar_grupos' ,description: 'Listar los grupos', is_active:true, createdAt:new Date()},
      { id:18,id_group:3, permission:'mostrar_grupo' ,description: 'Mostrar un grupo', is_active:true, createdAt:new Date()},
      { id:19,id_group:3, permission:'crear_grupo' ,description: 'Crear  Grupos', is_active:true, createdAt:new Date()},
      { id:20,id_group:3, permission:'actualizar_grupo' ,description: 'Actualizar grupo', is_active:true, createdAt:new Date()},
      { id:21,id_group:3, permission:'desactivar_grupo' ,description: 'Desactivar grupo', is_active:true, createdAt:new Date()},
      { id:22,id_group:3, permission:'activar_grupo' ,description: 'Activar grupo', is_active:true, createdAt:new Date()},
      { id:23,id_group:3, permission:'borrar_grupo' ,description: 'Borrar grupo', is_active:true, createdAt:new Date()},
      { id:24,id_group:3, permission:'menu_grupo' ,description: 'Mostrar en menu gestion de grupo', is_active:true, createdAt:new Date()},
      { id:25,id_group:4, permission:'listar_permisos' ,description: 'Listar los permisos', is_active:true, createdAt:new Date()},
      { id:26,id_group:4, permission:'mostrar_permiso' ,description: 'Mostrar un permiso', is_active:true, createdAt:new Date()},
      { id:27,id_group:4, permission:'crear_permiso' ,description: 'Crear permisos', is_active:true, createdAt:new Date()},
      { id:28,id_group:4, permission:'actualizar_permiso' ,description: 'Actualizar permiso', is_active:true, createdAt:new Date()},
      { id:29,id_group:4, permission:'desactivar_permiso' ,description: 'Desactivar permiso', is_active:true, createdAt:new Date()},
      { id:30,id_group:4, permission:'activar_permiso' ,description: 'Activar permiso', is_active:true, createdAt:new Date()},
      { id:31,id_group:4, permission:'borrar_permiso' ,description: 'Borrar permiso', is_active:true, createdAt:new Date()},
      { id:32,id_group:4, permission:'menu_permiso' ,description: 'Mostrar en menu gestion de permiso', is_active:true, createdAt:new Date()},
      { id:33,id_group:5, permission:'listar_rutas' ,description: 'Listar los rutas', is_active:true, createdAt:new Date()},
      { id:34,id_group:5, permission:'mostrar_ruta' ,description: 'Mostrar un ruta', is_active:true, createdAt:new Date()},
      { id:35,id_group:5, permission:'crear_ruta' ,description: 'Crear rutas', is_active:true, createdAt:new Date()},
      { id:36,id_group:5, permission:'actualizar_ruta' ,description: 'Actualizar ruta', is_active:true, createdAt:new Date()},
      { id:37,id_group:5, permission:'desactivar_ruta' ,description: 'Desactivar ruta', is_active:true, createdAt:new Date()},
      { id:38,id_group:5, permission:'activar_ruta' ,description: 'Activar ruta', is_active:true, createdAt:new Date()},
      { id:39,id_group:5, permission:'borrar_ruta' ,description: 'Borrar ruta', is_active:true, createdAt:new Date()},
      { id:40,id_group:5, permission:'menu_ruta' ,description: 'Mostrar en menu gestion de ruta', is_active:true, createdAt:new Date()},
      { id:41,id_group:6, permission:'dashboard' ,description: 'Mostrar dashborad', is_active:true, createdAt:new Date()},    
];
    await queryInterface.bulkInsert('permissions', permissionsData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('permissions', null, {});
  }
};
