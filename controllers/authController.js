const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {user} = require("../models/index");
const {
    generateAccessToken,
    generateRefreshToken,
} = require("../utils/jwtUtils");

const refreshTokens = [];

const login = async (req,res)=>{
    const {email, password } = req.body;
    try { 
        const usuario = await user.findOne({ where: { email } }); 
        if (!usuario) { 
          return res.status(401).json({ 
            message: "Usuario no Encontrado", 
            status: 401, 
          }); 
        } 
    
        // Verificar la contraseña (ejemplo con bcrypt) 
        const isPasswordValid = await bcrypt.compare(password, usuario.password); 
        if (!isPasswordValid) { 
          return res.status(401).json({ 
            message: "Contraseña incorrecta", 
            status: 401, 
          }); 
        } 

        // Generar accessToken y refreshToken 
        const accessToken = generateAccessToken({ id: usuario.id, email: usuario.email }); 
        const refreshToken = generateRefreshToken({ 
            id: usuario.id, 
            email: usuario.email, 
        }); 

        // Almacenar el refreshToken 
        refreshTokens.push(refreshToken); // Esto es solo un ejemplo, deberías usar una base de datos. 
        return res.json({ accessToken, refreshToken }); 

    } catch (error) { 
        console.error(error); 
        return res.status(500).json({ message: "Error en el servidor" }); 
    } 
};

const register = async (req, res) => { 
    const { username, email, password } = req.body; 
    try { 
    
        // Verificar si el email ya existe 
        const existingUser = await user.findOne({ where: { email } }); 
        if (existingUser) { 
            return res.status(400).json({ message: "El correo ya está en uso" }); 
        } 
    
        // Encriptar la contraseña 
        const hashedPassword = await bcrypt.hash(password, 10); 
    
        // Crear el nuevo user 
        const newUser = await user.create({ 
            username, 
            email, 
            password: hashedPassword, 
        }); 
  
        // Generar el token JWT 
        const token = jwt.sign( 
            { id: newUser.id, email: newUser.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" } 
        ); 
    
        return res.status(201).json({ message: "Usuario registrado exitosamente", token }); 
  
    } catch (error) { 
        console.error(error); 
        return res.status(500).json({ message: "Error en el servidor" }); 
    } 
}; 

const refreshAccessToken = (req, res) => { 
    const { refreshToken } = req.body; 

    // Verificar si se proporcionó el refreshToken 
    if (!refreshToken) { 
        return res.status(401).json({ 
          message: "Token de actualización no proporcionado", 
          status: 401, 
        }); 
    } 
    
    // Verificar si el refreshToken está almacenado 
    if (!refreshTokens.includes(refreshToken)) { 
        return res.status(401).json({ 
            message: "Refresh token inválido o expirado", 
            status: 401, 
        }); 
    } 
    
      
    
    try { 
        // Verificar el refreshToken 
        const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET); 
        // Generar un nuevo accessToken 
        const accessToken = generateAccessToken({ 
            id: payload.id, 
            email: payload.email, 
        }); 
        return res.json({ accessToken }); 
    } catch (error) { 
        return res.status(401).json({ 
            message: "Refresh token no válido", 
            status: 401, 
        }); 
    } 
}; 

const logout = (req, res) => { 
    const { refreshToken } = req.body; 
    // Elimina el refreshToken del almacenamiento 
    const index = refreshTokens.indexOf(refreshToken); 
    if (index > -1) { 
        refreshTokens.splice(index, 1); 
    } 
    return res.json({ message: "Sesión cerrada" }); 
}; 
  
    
  
module.exports = { login, register, refreshAccessToken, logout }; 
  
   