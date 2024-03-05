(async () =>{
    const dataBase = require("./src/connection/db")
    const Produto = require("./src/models/produto")
    const Usuario = require("./src/models/usuario")
    await dataBase.sync()
})();

require("./src/connection/db")
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const usuarioRouter = require("./src/routes/usuario.routes");
const produtoRouter = require("./src/routes/produto.routes");
const app = express()
const port = 3020 

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors())
app.use(express.json())
app.use(usuarioRouter)
app.use(produtoRouter)

app.listen(port, () => {
   console.log("Servidor rodando na porta: " + port) 
});