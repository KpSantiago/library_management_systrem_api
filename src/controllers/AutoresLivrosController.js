const Autor = require("../models/Autor");
const AutorLivro = require("../models/AutorLivro");
const Livro = require("../models/Livro");

module.exports = {
    async getAutoresLivros(req, res) {
        try {
            const al = await AutorLivro.findAll({
                include: [
                    { association: 'livro' },
                    { association: 'autor' },
                ]
            })
            return res.status(200).json({
                data: al
            })
        } catch (error) {
            return res.status(400).json({
                msg: 'ocorreu um erro inesperado',
                error
            })
        }
    },
    async postAutoresLivros(req, res) {
        const { livro_id, autor_id } = req.body
        try {
            const al = await AutorLivro.create({ livro_id, autor_id })
            return res.status(200).json({
                data: al
            })
        } catch (error) {
            return res.status(400).json({
                msg: 'ocorreu um erro inesperado',
                error
            })
        }
    }
}