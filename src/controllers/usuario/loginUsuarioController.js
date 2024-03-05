const bcrypt = require("bcrypt")
let usuario = require("../../models/usuario")

const loginUsuarioController = async (req, res) => {
    try {
        const { email, password } = req.body
        const usuarioExistente = await usuario.findOne({ where: { email: email } });

        if(!usuarioExistente) {
            return res.json("Email invalido!")
        }
        if(usuarioExistente){
            return res.json('Email válido')
        }
        let passwordValida = await bcrypt.compare(password, usuarioExistente.dataValues.password);
        console.log(passwordValida)
        if(!passwordValida) {
            return res.status(405)
        }
        await usuario.update({
            idUsuario: usuarioExistente.idUsuario,
            email: usuarioExistente.email,
            password: usuarioExistente.password,
            logado: 1
        }, { where: { idUsuario: usuarioExistente.idUsuario } });
        return res.json({ message: "Login efetuado com sucesso!", usuario: usuarioExistente });
    } catch (err) {
        return res.json({ error: "Ocorreu um erro!" })
    }


}

console.log("funcionando")

module.exports = loginUsuarioController