const { hash } = require("bcrypt")

const alterandoUsuarioController = async (req, res) => {
    try {
        let usuario = require("../../models/usuario");
        const idUsuario = req.params.idUsuario;
        const { email, password } = req.body;
        const usuarioExistente = usuario.findByPk(idUsuario);
        const passwordHash = await hash(password, 8)
        await usuario.update({
            email: email || usuarioExistente.email,
            password: passwordHash || usuarioExistente.password,
        }, { where: { idUsuario: idUsuario } });
        const usuarioAtualizado = await usuario.findByPk(idUsuario);
        return res.json({ message: "Usuario atualizado com sucesso!", usuario: usuarioAtualizado })
    } catch (err) {
        return console.log(err)
    }
};

module.exports = alterandoUsuarioController;