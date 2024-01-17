const Autor = require("../models/Autor");
const Livro = require("../models/Livro");

module.exports = {
    async getAutores(req, res) {
        try {
            const autores = await Autor.findAll({
                include: [
                    { model: Livro, as: 'livro', through: { attributes: [] } },
                ]
            });

            return res.status(200).json({
                data: autores,
            })
        } catch (err) {
            return res.json({
                error: 'deu erro boy',
                erro: err
            })
        }
    },
    async postAutores(req, res) {
        const { nome } = req.body

        try {
            const autores = await Autor.create({ nome })
            return res.status(200).json({
                msg: 'Autor adicionado!'
            })
        } catch (error) {
            return res.status(400).json({
                msg: 'ocorreu um erro insperado',
                error
            })
        }

    }
}