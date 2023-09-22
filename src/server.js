const express = require('express');
const routes = require('./routes.js');

require("./database/index");

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Servidor rodando na porta 3333")); 