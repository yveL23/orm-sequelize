const User = require("../models/User");

module.exports = {
    // Função responsável por buscar todos os usuários que foram cadastrados na aplicação
    async index(req,res){
        // Método findAll() é utilizado para buscar por todos os dados dos usuários existentes no banco de dados.

        // Utilizamos a propriedade raw com o valor true(verdadeiro), porque a função findAll()  vai trazer informações desnecessários, por isso para retornar somente um array de objetos, passamos essa propriedade.
        const users = await User.findAll({raw: true});

        return res.json(users);
    },
    async unique(req, res){
        const {id} = req.params;
        const users = await User.findByPk(id);

        return res.json(users);
    },
    // Função responsável por cadastrar os usuários na aplicação
    async store(req, res) {
        // Desestruturando um objeto e passando as propriedades name e email no corpo da requisição
        const {name, email} = req.body
        // Inserindo os dados do usuário no banco de dados
        const user = await User.create({ name, email })
        // retornando uma proposta no formato json.
        return res.json(user);
    },

    async update(req,res){
        const {id} = req.params
        const {name, email} = req.body

        const user = await User.update({name, email}, {where: {id: id}});

        return res.json(user);
    },

    async delete(req, res){
        // Enviando o id nos parâmetros da requisição
        const {id} = req.params;

        // Função destroy() do sequelize  é usada para deletar um registro no banco de dados
        const user = await User.destroy({where: {id: id}});

        // Retorna uma reposta no formato json().
        return response.json(user);
    }

}