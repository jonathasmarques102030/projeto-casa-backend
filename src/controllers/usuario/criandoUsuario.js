const criandoUsuarioController = async (req, res) => {
    try {
        const db = require("../../connection/db");
        const usuario = require("../../models/usuario");
    
        await db.sync();
    
        const { email, idUsuario, password } = req.body;
        const usuarioExistente = await usuario.findOne({ where: { email: email } });

        if (usuarioExistente) {
            return res.json("Email já cadastrado!");
        }
        
        const novoUsuario = await usuario.create({
            idUsuario,
            email,
            password,
            logado: 1,
        });
        console.log(novoUsuario);
        return res.json({ Usuario: novoUsuario });
    } catch (err) {
        return res.json({ error: err });
    }
};

module.exports = criandoUsuarioController;