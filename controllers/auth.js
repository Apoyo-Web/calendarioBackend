const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { generateJWT } = require('../helpers/jwt')

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

        //Generar JWT
        const token = await generateJWT(user.id, user.name)

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
            
        })


    } catch (error) {

        res.status(500).json({

            ok: false,
            msg: 'Error en el registro'
        })
        
    }

    
    
    //manejo de errores

    

   
}

const loginUsuario = async(req, res) => {
    
    const {email, password } = req.body

    try {
        const user = await User.findOne({ email })
        
        if (!user) {
            return res.status(400).json({

                ok: false,
                msg: "Usuario no existe"
            })
        }

        //confirmar password

        const validPassword = bcrypt.compareSync(password, user.password)

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg:"Password incorrecto"
            })
        }

        //Generar JWT
        const token = await generateJWT(user.id, user.name)

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token

        })
        
    } catch (error) {
        res.status(500).json({

            ok: false,
            msg: 'Error en el login'
        })
        
    }
  
  
    
}

const revalidarToken = async (req, res) => {

    const uid = req.uid
    const name = req.name


    const token = await  generateJWT(uid, name)
    
    res.json({
        ok: true,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}