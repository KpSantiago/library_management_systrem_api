const Autor = require("../models/Autor");
const Livro = require("../models/Livro");

module.exports = {
    async getAutores(req, res) {
        try {
            const autores = await Autor.findAll({ include: [{ model: Livro, as: 'livro', through: { attributes: [] } }] });

            return res.status(200).json({
                data: autores,
            })
        } catch (err) {
            return res.json({
                error: 'deu erro boy',
                erro: err
            })
        }
    }
}