"use strict";

var Sequelize = require("sequelize");
var dataBase = require("../connection/db");
var Produto = dataBase.define("produto", {
  idProduto: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quartos: {
    type: Sequelize.STRING,
    allowNull: false
  },
  suites: {
    type: Sequelize.STRING,
    allowNull: false
  },
  banheiros: {
    type: Sequelize.STRING,
    allowNull: false
  },
  areaUtil: {
    type: Sequelize.STRING,
    allowNull: false
  },
  areaTotal: {
    type: Sequelize.STRING,
    allowNull: false
  },
  localizacao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valor: {
    type: Sequelize.FLOAT
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem1: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem3: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem4: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem5: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem6: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem7: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem8: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem9: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem10: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem11: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imagem12: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
module.exports = Produto;