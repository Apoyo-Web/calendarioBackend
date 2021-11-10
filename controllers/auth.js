const User = require('../models/User')

const crearUsuario = async (req, res) => {
    
    const { name, email, password } = req.body

    try {
        const user = new User(req.body)

        await user.save()

        res.status(201).json({
            ok: true,
            msg: 'registro',
            name,
            email,
            password
        })


    } catch (error) {

        res.status(500).json({

            ok: false,
            msg: 'Error en el registro'
        })
        
    }

    
    
    //manejo de errores

    

   
}

const loginUsuario = (req, res) => {
    
    const { name, password } = req.body
  
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