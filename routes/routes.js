const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
//Middleware
const notFoundHandler = require("../middlewares/notFoundHandler");
const errorHandler = require("../middlewares/errorHandler");
// importando routes 
const authRoutes = require("./authRoutes"); 
const usuariosRoutes = require("./usuarioRoutes"); 
const rolesRoutes = require("./rolRoutes"); 
const mntTipoRegistroRoutes = require("./mntTipoRegistroRoutes")
const diaRoutes = require("./diaRoutes")
const mntEspecialidadRoutes = require("./mntEspecialidadRoutes")
const mntHospitalRoutes = require("./mntHospitalRoutes")
const mntMedicoRoutes = require("./mntMedicoRoutes")
const mntHorarioAtencionRoutes = require("./mntHorarioAtencionRoutes")


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Registrar rutas: 
app.use("/auth", authRoutes); 
app.use("/usuarios", usuariosRoutes); 
app.use("/roles", rolesRoutes); 
app.use("/tipo/registro", mntTipoRegistroRoutes); 
app.use("/dia", diaRoutes); 
app.use("/especialidad", mntEspecialidadRoutes); 
app.use("/hospital", mntHospitalRoutes); 
app.use("/medico", mntMedicoRoutes); 
app.use("/horario/atencion", mntHorarioAtencionRoutes); 

app.get('*',(req, res) => 
    res.status(200).send({message: "Bienvenido a API con nodejs",}),
);

//para manejar rutas inexistentes 
app.use(notFoundHandler);
// manejar error en las rutas 
app.use(errorHandler);

module.exports=app;