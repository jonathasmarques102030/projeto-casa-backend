"use strict";

var express = require("express");
var usuarioRouter = express.Router();
var alterandoUsuarioController = require("../controllers/usuario/alterandoUsuario");
var criandoUsuarioController = require("../controllers/usuario/criandoUsuario");
var deletandoUsuarioController = require("../controllers/usuario/deletandoUsuario");
var loginUsuarioController = require("../controllers/usuario/loginUsuarioController");
var _require = require("../controllers/usuario/pegandoUsuarioController"),
  pegandoUsuarioController = _require.pegandoUsuarioController,
  pegandoUsuarioIdController = _require.pegandoUsuarioIdController;
usuarioRouter.post("/usuario", criandoUsuarioController);
usuarioRouter.get("/usuario", pegandoUsuarioController);
usuarioRouter.get("/usuario/:id", pegandoUsuarioIdController);
usuarioRouter.post("/login", loginUsuarioController);
usuarioRouter["delete"]("/usuario/:id", deletandoUsuarioController);

//usuarioRouter.put("/usuario/:idUsuario", alterandoUsuarioController);

module.exports = usuarioRouter;