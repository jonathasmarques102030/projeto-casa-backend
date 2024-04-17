const alterandoUsuarioController = async (req, res) => {
    try {
        let usuario = require("../../models/usuario");
        const idUsuario = req.params.idUsuario;
        const { email, password } = req.body;

        const usuarioExistente = await usuario.findByPk(idUsuario);
        if (!usuarioExistente) {
            return res.status(404).json({ message: "Usuário não encontrado!" });
        }

        await usuario.update({
            email: email || usuarioExistente.email,
            password: password || usuarioExistente.password,
        }, { where: { idUsuario: idUsuario } });

        const usuarioAtualizado = await usuario.findByPk(idUsuario);

        return res.json({ message: "Usuário atualizado com sucesso!", usuario: usuarioAtualizado });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Ocorreu um erro ao atualizar o usuário" });
    }
};

module.exports = alterandoUsuarioController;