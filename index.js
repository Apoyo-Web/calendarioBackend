const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config()
const cors = require('cors')

//Crear Servidor
const app = express();

//Base de datos

dbConnection();

//CORS
app.use(cors())

//Directorio Publico
app.use(express.static('public'))

//Lectura y parseo Body
app.use(express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'))


//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor UP en puerto ${process.env.PORT}`)
})