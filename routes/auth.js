/*
Rutas de usuarios /Auth
host / /api/auth

*/

const express = require('express')
const {check} = require('express-validator')

const router = express.Router()

const {crearUsuario, loginUsuario, revalidarToken }= require('../controllers/auth')
const { validateForms } = require('../middlewares/validateForms')
const { validateJWT } = require('../middlewares/validateJWT')


router.post('/register',
    [
        check('name', 'El nombre es obligatorio').notEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caractéres').isLength({ min: 6 }),
        validateForms
    ],
    crearUsuario)


router.post('/',
    [
        check('email', 'El nombre es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caractéres').isLength({ min: 6 }),
        validateForms

    ],
    
    loginUsuario)

router.get('/renew', validateJWT, revalidarToken)

module.exports = router;