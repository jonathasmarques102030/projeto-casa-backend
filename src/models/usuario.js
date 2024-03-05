const Sequelize = require("sequelize");
const dataBase = require("../connection/db");

const Usuario = dataBase.define("usuario", {
    idUsuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.DataTypes.STRING,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
    },
    logado: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: false,
    }
});

module.exports = Usuario;