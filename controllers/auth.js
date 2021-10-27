
const crearUsuario = (req, res) => {
    

    res.json({
        ok: true,
        msg: 'registro'
    })
}

const loginUsuario = (req, res) => {
    
    res.json({
        ok: true,
        msg:'Login'
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