const jwt = require('jsonwebtoken')



const validateJWT = (req, res, next) => {

// leer token en x-token en los headers
    
    const token = req.header('x-token')
    

    if (!token) {
        
        return res.status(401).json({
            ok: false,
            msg: 'No hay token'
        })
    }


    try {

        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )

        req.uid = uid
        req.name = name

       
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        })

        
    }

    next()

    
}


module.exports = {

    validateJWT
}