const { update } = require("../models/User");
const User = require("../models/User");

module.exports = {
    // Função responsável por buscar todos os usuários que foram cadastrados na aplicação
    async index(req,res){
        // Método findAll() é utilizado para buscar por todos os dados dos usuários existentes no banco de dados.

        // Utilizamos a propriedade raw com o valor true(verdadeiro), porque a função findAll()  vai trazer informações desnecessários, por isso para retornar somente um array de objetos, passamos essa propriedade.
        const users = await User.findAll({raw: true});
    },
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
        const {name, email} = request.body

        const user = await User.update({name, email}, {where: {id: id}});

        return res.json(user);
    }
}