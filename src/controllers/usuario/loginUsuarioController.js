const usuario = require("../../models/usuario");

const loginUsuarioController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuarioExistente = await usuario.findOne({ where: { email } });

        if (!usuarioExistente) {
            return res.json("Email inválido!");
        }

        if (usuarioExistente) {
            return res.json('Email válido');
        }

        if (password !== usuarioExistente.dataValues.password) {
            return res.status(405).json({ error: "Senha incorreta!" });
        }

        await usuario.update({
            idUsuario: usuarioExistente.idUsuario,
            email: usuarioExistente.email,
            password: usuarioExistente.password,
            logado: 1,
        }, { where: { idUsuario: usuarioExistente.idUsuario } });

        return res.json({ message: "Login efetuado com sucesso!", usuario: usuarioExistente });
    } catch (err) {
        return res.json({ error: "Ocorreu um erro!" });
    }
};

console.log("funcionando");

module.exports = loginUsuarioController;