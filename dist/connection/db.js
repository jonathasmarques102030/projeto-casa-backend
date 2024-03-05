"use strict";

var Sequelize = require("sequelize");
require("dotenv").config();
var sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  dialect: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT
});
module.exports = sequelize;