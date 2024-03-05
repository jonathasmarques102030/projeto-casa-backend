const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const usuarioRouter = require("./routes/usuario.routes");
const produtoRouter = require("./routes/produto.routes");
const app = express();

const port = process.env.PORT || 3020;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(express.json());
app.use(usuarioRouter);
app.use(produtoRouter);

app.listen(port, () => {
   console.log("Servidor rodando na porta: " + port);
});