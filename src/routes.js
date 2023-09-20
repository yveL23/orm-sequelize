// importando o framework express
const express = require("express");

// importando o arquivo do UserController, que contém as funções de criar, buscar, atualizar e deletar ps dados do usuário.
const UserController = require("./controllers/UserController");

// inicializar as rotas
const routes = express.Router();

// criando a rota /users utilizando o método post para cadastrar o usuário na aplicação/banco de dados
routes.post("/create", UserController.store);

// Rota para buscar os dados dos usuários que foram cadastrados no banco de dados
routes.get("/users", UserController.index);

module.exports = routes;