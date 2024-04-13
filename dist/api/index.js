"use strict";

var express = require("express");
var bodyParser = require('body-parser');
var cors = require("cors");
var usuarioRouter = require("../routes/usuario.routes");
var produtoRouter = require("../routes/produto.routes");
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(express.json());
app.use(usuarioRouter);
app.use(produtoRouter);
app.get('/', function (req, res) {
  res.send('Página inicial do meu aplicativo');
});
app.listen(port, function () {
  console.log("Servidor rodando na porta: " + port);
});