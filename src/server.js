const express = require('express');
const routes = require('./routes.js');

const app = express();
app.use(express.json());

app.use("/user", routes);

app.listen(3333, () => console.log("Servidor rodando na porta 3333")); 