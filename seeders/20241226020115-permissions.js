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
      { id:42,id_group:7, permission:'listar_tipo_registro' ,description: 'Listar los tipos de registro', is_active:true, createdAt:new Date()},
{ id:43,id_group:7, permission:'mostrar_tipo_registro' ,description: 'Mostrar un tipo de registro', is_active:true, createdAt:new Date()},
{ id:44,id_group:7, permission:'crear_tipo_registro' ,description: 'Crear tipos de registro', is_active:true, createdAt:new Date()},
{ id:45,id_group:7, permission:'actualizar_tipo_registro' ,description: 'Actualizar tipo de registro', is_active:true, createdAt:new Date()},
{ id:46,id_group:7, permission:'borrar_tipo_registro' ,description: 'Borrar tipo de registro', is_active:true, createdAt:new Date()},
{ id:47,id_group:7, permission:'menu_tipo_registro' ,description: 'Mostrar en menu gestion de tipo de registro', is_active:true, createdAt:new Date()},
{ id:48,id_group:8, permission:'listar_dia' ,description: 'Listar los dias', is_active:true, createdAt:new Date()},
{ id:49,id_group:8, permission:'mostrar_dia' ,description: 'Mostrar un dia', is_active:true, createdAt:new Date()},
{ id:50,id_group:8, permission:'crear_dia' ,description: 'Crear dia', is_active:true, createdAt:new Date()},
{ id:51,id_group:8, permission:'actualizar_dia' ,description: 'Actualizar dia', is_active:true, createdAt:new Date()},
{ id:52,id_group:8, permission:'borrar_dia' ,description: 'Borrar dia', is_active:true, createdAt:new Date()},
{ id:53,id_group:8, permission:'menu_dia' ,description: 'Mostrar en menu gestion de dias', is_active:true, createdAt:new Date()},
{ id:54,id_group:9, permission:'listar_especialida' ,description: 'Listar los especialidades', is_active:true, createdAt:new Date()},
{ id:55,id_group:9, permission:'mostrar_especialida' ,description: 'Mostrar un especialida', is_active:true, createdAt:new Date()},
{ id:56,id_group:9, permission:'crear_especialida' ,description: 'Crear especialida', is_active:true, createdAt:new Date()},
{ id:57,id_group:9, permission:'actualizar_especialida' ,description: 'Actualizar especialida', is_active:true, createdAt:new Date()},
{ id:58,id_group:9, permission:'desactivar_especialida' ,description: 'Desactivar especialida', is_active:true, createdAt:new Date()},
{ id:59,id_group:9, permission:'activar_especialida' ,description: 'Activar especialida', is_active:true, createdAt:new Date()},
{ id:60,id_group:9, permission:'borrar_especialida' ,description: 'Borrar especialida', is_active:true, createdAt:new Date()},
{ id:61,id_group:9, permission:'menu_especialida' ,description: 'Mostrar en menu gestion de especialida', is_active:true, createdAt:new Date()},
{ id:62,id_group:10, permission:'listar_hospitales' ,description: 'Listar los hospitales', is_active:true, createdAt:new Date()},
{ id:63,id_group:10, permission:'mostrar_hospital' ,description: 'Mostrar un hospital', is_active:true, createdAt:new Date()},
{ id:64,id_group:10, permission:'crear_hospital' ,description: 'Crear hospital', is_active:true, createdAt:new Date()},
{ id:65,id_group:10, permission:'actualizar_hospital' ,description: 'Actualizar hospital', is_active:true, createdAt:new Date()},
{ id:66,id_group:10, permission:'desactivar_hospital' ,description: 'Desactivar hospital', is_active:true, createdAt:new Date()},
{ id:67,id_group:10, permission:'activar_hospital' ,description: 'Activar hospital', is_active:true, createdAt:new Date()},
{ id:68,id_group:10, permission:'borrar_hospital' ,description: 'Borrar hospital', is_active:true, createdAt:new Date()},
{ id:69,id_group:10, permission:'menu_hospital' ,description: 'Mostrar en menu gestion de hospital', is_active:true, createdAt:new Date()},
{ id:70,id_group:11, permission:'listar_medicos' ,description: 'Listar los medicos', is_active:true, createdAt:new Date()},
{ id:71,id_group:11, permission:'mostrar_medico' ,description: 'Mostrar un medicos', is_active:true, createdAt:new Date()},
{ id:72,id_group:11, permission:'crear_medico' ,description: 'Crear medico', is_active:true, createdAt:new Date()},
{ id:73,id_group:11, permission:'actualizar_medico' ,description: 'Actualizar medico', is_active:true, createdAt:new Date()},
{ id:74,id_group:11, permission:'desactivar_medico' ,description: 'Desactivar medico', is_active:true, createdAt:new Date()},
{ id:75,id_group:11, permission:'activar_medico' ,description: 'Activar medico', is_active:true, createdAt:new Date()},
{ id:76,id_group:11, permission:'borrar_medico' ,description: 'Borrar medico', is_active:true, createdAt:new Date()},
{ id:77,id_group:11, permission:'menu_medico' ,description: 'Mostrar en menu gestion de medico', is_active:true, createdAt:new Date()},
{ id:78,id_group:12, permission:'listar_horarios_atencion' ,description: 'Listar los  horarios de atencion', is_active:true, createdAt:new Date()},
{ id:79,id_group:12, permission:'mostrar_horario_atencion' ,description: 'Mostrar un horario de atencion', is_active:true, createdAt:new Date()},
{ id:80,id_group:12, permission:'crear_horario_atencion' ,description: 'Crear horario de atencion', is_active:true, createdAt:new Date()},
{ id:81,id_group:12, permission:'actualizar_horario_atencion' ,description: 'Actualizar horario de atencion', is_active:true, createdAt:new Date()},
{ id:82,id_group:12, permission:'desactivar_horario_atencion' ,description: 'Desactivar horario de atencion', is_active:true, createdAt:new Date()},
{ id:83,id_group:12, permission:'activar_horario_atencion' ,description: 'Activar horario de atencion', is_active:true, createdAt:new Date()},
{ id:84,id_group:12, permission:'borrar_horario_atencion' ,description: 'Borrar horario de atencion', is_active:true, createdAt:new Date()},
{ id:85,id_group:12, permission:'menu_horario_atencion' ,description: 'Mostrar en menu gestion de horario de atencion', is_active:true, createdAt:new Date()},
{ id:86,id_group:13, permission:'listar_servicios' ,description: 'Listar los servicios', is_active:true, createdAt:new Date()},
{ id:87,id_group:13, permission:'mostrar_servicio' ,description: 'Mostrar un servicio', is_active:true, createdAt:new Date()},
{ id:88,id_group:13, permission:'crear_servicio' ,description: 'Crear servicio', is_active:true, createdAt:new Date()},
{ id:89,id_group:13, permission:'actualizar_servicio' ,description: 'Actualizar servicio', is_active:true, createdAt:new Date()},
{ id:90,id_group:13, permission:'desactivar_servicio' ,description: 'Desactivar servicio', is_active:true, createdAt:new Date()},
{ id:91,id_group:13, permission:'activar_servicio' ,description: 'Activar servicio', is_active:true, createdAt:new Date()},
{ id:92,id_group:13, permission:'borrar_servicio' ,description: 'Borrar servicio', is_active:true, createdAt:new Date()},
{ id:93,id_group:13, permission:'menu_servicio' ,description: 'Mostrar en menu gestion de servicio', is_active:true, createdAt:new Date()},
{ id:94,id_group:14, permission:'listar_estado_agenda' ,description: 'Listar los estados de agenda', is_active:true, createdAt:new Date()},
{ id:95,id_group:14, permission:'mostrar_estado_agenda' ,description: 'Mostrar un estado de agenda', is_active:true, createdAt:new Date()},
{ id:96,id_group:14, permission:'crear_estado_agenda' ,description: 'Crear estado de agenda', is_active:true, createdAt:new Date()},
{ id:97,id_group:14, permission:'actualizar_estado_agenda' ,description: 'Actualizar estado de agenda', is_active:true, createdAt:new Date()},
{ id:98,id_group:14, permission:'borrar_estado_agenda' ,description: 'Borrar estado de agenda', is_active:true, createdAt:new Date()},
{ id:99,id_group:14, permission:'menu_estado_agenda' ,description: 'Mostrar en menu gestion de estado de agenda', is_active:true, createdAt:new Date()},
{ id:100,id_group:15, permission:'listar_agenda_medica' ,description: 'Listar los agendas medicas', is_active:true, createdAt:new Date()},
{ id:101,id_group:15, permission:'mostrar_agenda_medica' ,description: 'Mostrar un agenda medica', is_active:true, createdAt:new Date()},
{ id:102,id_group:15, permission:'crear_agenda_medica' ,description: 'Crear agenda medica', is_active:true, createdAt:new Date()},
{ id:103,id_group:15, permission:'actualizar_agenda_medica' ,description: 'Actualizar agenda medica', is_active:true, createdAt:new Date()},
{ id:104,id_group:15, permission:'borrar_agenda_medica' ,description: 'Borrar agenda medica', is_active:true, createdAt:new Date()},
{ id:105,id_group:15, permission:'menu_agenda_medica' ,description: 'Mostrar en menu gestion de agenda medica', is_active:true, createdAt:new Date()}, 
{ id:106,id_group:16, permission:'dashboard_medico' ,description: 'Dashboard de medico', is_active:true, createdAt:new Date()},
{ id:107,id_group:16, permission:'citas_atendidas_medico' ,description: 'Citas atendidas de medico', is_active:true, createdAt:new Date()},
{ id:108,id_group:16, permission:'calificacion_medico' ,description: 'Calificaciones de los medicos', is_active:true, createdAt:new Date()},
{ id:109,id_group:16, permission:'proxima_cita_medico' ,description: 'Proxima cita de medicos', is_active:true, createdAt:new Date()},
{ id:110,id_group:1, permission:'ver_perfil' ,description: 'Ver perfil de usuario ', is_active:true, createdAt:new Date()},
{ id:111,id_group:17, permission:'catalogo_paciente_medico' ,description: 'Pacientes ven catalogo de medico ', is_active:true, createdAt:new Date()},
{ id:112,id_group:17, permission:'crear_cita_paciente' ,description: 'Menu de crear cita el paciente', is_active:true, createdAt:new Date()},
{ id:113,id_group:17, permission:'citas_anteriores_paciente' ,description: 'Menu de cita ateriores del paciente', is_active:true, createdAt:new Date()},
{ id:114,id_group:17, permission:'calendario' ,description: 'paciente ve calendario de medico', is_active:true, createdAt:new Date()},
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
