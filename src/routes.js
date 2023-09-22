// importando o framework express
const express = require("express");
const { User } = require("./config/database.cjs");

// importando o arquivo do UserController, que contém as funções de criar, buscar, atualizar e deletar ps dados do usuário.
const UserController = require("./controllers/UserController");

// inicializar as rotas
const routes = express.Router();

// criando a rota /users utilizando o método post para cadastrar o usuário na aplicação/banco de dados
routes.post("/users", UserController.store);

// Rota para buscar os dados dos usuários que foram cadastrados no banco de dados
routes.get("/all", UserController.index);

routes.put("/update/:id", UserController.update)

routes.get("/unique/:id", UserController.unique);

// Rota para deletar um registro na aplicação
routes.delete("/dell", UserController.delete);

module.exports = routes;