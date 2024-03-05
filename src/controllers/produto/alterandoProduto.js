const { hash } = require("bcrypt")

const alterandoProdutoController = async (req, res) => {
    try {
        let produto = require("../../models/produto");
        const idProduto = req.params.idProduto;
        const { titulo, descricao, quartos, suites, banheiros, areaUtil, areaTotal, localizacao, valor, imagem } = req.body;
        const produtoExistente = produto.findByPk(idProduto);
        await produto.update({
            titulo: titulo || produtoExistente.titulo,
            descricao: descricao || produtoExistente.descricao,
            quartos: quartos || produtoExistente.quartos,
            suites: suites || produtoExistente.suites,
            banheiros: banheiros || produtoExistente.banheiros,
            areaUtil: areaUtil || produtoExistente.areaUtil,
            areaTotal: areaTotal || produtoExistente.areaTotal,
            localizacao: localizacao || produtoExistente.localizacao,
            valor: valor || produtoExistente.valor,
            imagem: imagem || produtoExistente.imagem

        }, { where: { idProduto: idProduto } });
        const produtoAtualizado = await produto.findByPk(idProduto);
        return res.json({ message: "produto atualizado com sucesso!", produto: produtoAtualizado })
    } catch (err) {
        return console.log(err)
    }
};

module.exports = alterandoProdutoController;