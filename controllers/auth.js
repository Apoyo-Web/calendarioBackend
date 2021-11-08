const {validationResult} = require('express-validator')

const crearUsuario = (req, res) => {
    
    const { name, email, password } = req.body
    
    //manejo de errores

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res) => {
    
    const { name, password } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    res.json({
        ok: true,
        msg: 'Login',
        name,
        password
        
    })
    
}

const revalidarToken = (req, res) => {
    
    res.json({
        ok: true,
        msg:'Renovación Token'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}