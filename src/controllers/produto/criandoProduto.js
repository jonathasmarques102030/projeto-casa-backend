const { hash } = require("bcrypt");

const criandoProdutoController = async (req, res) => {
    try {
        const db = require("../../connection/db")
        const produto = require("../../models/produto")
    
        await db.sync()
    
        const { titulo, descricao, quartos, suites, banheiros, areaUtil, areaTotal, localizacao, valor, imagem, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, imagem11, imagem12 } = req.body
        console.log(req.body)
        const produtoExistente = await produto.findOne({ where: { titulo: titulo } });

        if(produtoExistente) {
            return res.json("Produto invalido!")
        }

        const novoProduto = await produto.create({
            titulo, descricao, quartos, suites, banheiros, areaUtil, areaTotal, localizacao, valor, imagem, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, imagem11, imagem12
        });
        console.log(novoProduto)
        return res.json({produto: novoProduto})
    } catch(err){
        return res.json({error: err.message})
    }

};

module.exports = criandoProdutoController