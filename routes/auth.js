/*
Rutas de usuarios /Auth
host / /api/auth

*/

const express = require('express')
const {check} = require('express-validator')

const router = express.Router()

const {crearUsuario, loginUsuario, revalidarToken }= require('../controllers/auth')

router.post('/register',
    [
        check('name', 'El nombre es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caractéres').isLength({min:6})
    ],
    crearUsuario)


router.post('/',
    [
        check('email', 'El nombre es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caractéres').isLength({min: 6})

    ],
    
    loginUsuario)

router.get('/renew', revalidarToken)

module.exports = router;