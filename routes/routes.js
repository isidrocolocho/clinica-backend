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

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Registrar rutas: 
app.use("/auth", authRoutes); 
app.use("/usuarios", usuariosRoutes); 
app.use("/roles", rolesRoutes); 
app.get('*',(req, res) => 
    res.status(200).send({message: "Bienvenido a API con nodejs",}),
);

//para manejar rutas inexistentes 
app.use(notFoundHandler);
// manejar error en las rutas 
app.use(errorHandler);

module.exports=app;