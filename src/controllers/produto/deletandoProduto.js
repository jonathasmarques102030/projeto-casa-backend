const deletandoProdutoController = async (req, res) => {
    try {
      const db = require("../../connection/db");
      const produto = require("../../models/produto");
      await db.sync();
  
      const id = req.params.id;
      console.log(`ID do produto a ser deletado: ${id}`);
  
      const produtoEncontrado = await produto.findOne({ where: { idProduto: id } });
      console.log("Produto encontrado: ", produtoEncontrado);
  
      if (!produtoEncontrado) {
        return res.status(404).json({ message: "Produto não encontrado!" });
      }
  
      await produto.destroy({ where: { idProduto: id } });
  
      return res.json({ message: "Produto deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Ocorreu um erro ao deletar o produto." });
    }
  };

module.exports = deletandoProdutoController;