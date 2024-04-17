const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const usuarioRouter = require("./src/routes/usuario.routes");
const produtoRouter = require("./src/routes/produto.routes");
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(usuarioRouter);
app.use(produtoRouter);

app.get('/', function(req, res) {
   res.send('Página inicial do meu aplicativo');
 });

app.listen(port, () => {
   console.log("Servidor rodando na porta: " + port);
});