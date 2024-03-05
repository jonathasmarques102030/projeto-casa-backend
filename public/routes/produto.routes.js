"use strict";

var express = require("express");
var produtoRouter = express.Router();
var criandoProdutoController = require("../controllers/Produto/criandoProduto");
var _require = require("../controllers/Produto/pegandoProdutocontroller"),
  pegandoProdutoController = _require.pegandoProdutoController,
  pegandoProdutoIdController = _require.pegandoProdutoIdController;
var alterandoProdutoController = require("../controllers/Produto/alterandoProduto");
var deletandoProdutosController = require("../controllers/Produto/deletandoProduto");
produtoRouter.post("/Produto/:idUsuario", criandoProdutoController);
produtoRouter.get("/Produto", pegandoProdutoController);
produtoRouter.get("/Produto/:idProduto", pegandoProdutoIdController);
produtoRouter.put("/Produto/:id", alterandoProdutoController);
produtoRouter["delete"]("/Produto/:id", deletandoProdutosController);
module.exports = produtoRouter;