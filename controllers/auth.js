const User = require('../models/User')
const bcrypt = require('bcryptjs')

const crearUsuario = async (req, res) => {
    
    const { name, email, password } = req.body

    try {


        let user = await User.findOne({ email })
        
        if (user) {
            return res.status(400).jeson({

                ok: false,
                msg: "Usuario ya registrado"
            })
        }

        user = new User(req.body)
        
        //Encriptar contraseña
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(password, salt)

        await user.save()

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
            
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