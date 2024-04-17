const alterandoProdutoController = async (req, res) => {
    try {
        let produto = require("../../models/produto");
        const idProduto = req.params.idProduto;
        const { titulo, descricao, quartos, suites, banheiros, areaUtil, areaTotal, localizacao, valor, imagem } = req.body;

        const produtoExistente = await produto.findByPk(idProduto);
        if (!produtoExistente) {
            return res.status(404).json({ message: "Produto não encontrado!" });
        }

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
        }, { where: { idProduto } });

        // Obtenha o produto atualizado
        const produtoAtualizado = await produto.findByPk(idProduto);
        
        return res.json({ message: "Produto atualizado com sucesso!", produto: produtoAtualizado });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Ocorreu um erro ao atualizar o produto" });
    }
};

module.exports = alterandoProdutoController;