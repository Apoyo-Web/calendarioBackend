
const crearUsuario = (req, res) => {
    
    const { name, email, password } = req.body
    
    if (name.length < 5) {
        return res.status(400).json({
            ok: false,
            msg:"El nombre es muy corto"
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
    
    const {name, password} = req.body
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