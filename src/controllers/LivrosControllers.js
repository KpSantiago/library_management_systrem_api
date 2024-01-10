const Autor = require("../models/Autor");
const Livro = require("../models/Livro");

module.exports = {
    async getLivros(req, res) {
        try {
            const livro = await Livro.findAll({
                include: [
                    { model: Autor, as: 'autor', through: { attributes: [] } },
                ]
            });

            return res.status(200).json({
                data: livro,
            })
        } catch (err) {
            return res.json({
                error: 'deu erro boy',
                erro: err
            })
        }
    },
    async getOneLivro(req, res) {
        try {
            const { id } = req.params;

            const livro = await Livro.findAll({
                include: [
                    { model: Autor, as: 'autor', through: { attributes: [] } },
                ], where: { id }
            });

            return res.status(200).json({
                data: livro,
            })
        } catch (err) {
            return res.json({
                error: 'deu erro boy',
                erro: err
            })
        }
    },
    async bookPurchased(req, res) {
        const { id } = req.params;
        const { esta_disponivel, data_devolucao, data_emissao, data_devolucao_estimada, updated_at } = req.body;

        if (esta_disponivel != true && esta_disponivel != false || !id) {
            return res.status(401).json({
                error: true,
                message: 'Verifique se o dados (esta_disponivel, id) foram devidamente mandados'
            })
        }

        try {
            const livros = Livro.update({ esta_disponivel, data_emissao, data_devolucao_estimada, data_devolucao, updated_at }, { where: { id } });

            return res.status(200).json({
                message: 'Livro atualizado!',
                data: livros
            })
        } catch (err) {
            return res.status(400).json({
                error: 'ocorreu um erro inesperado',
                erro: err
            })
        }
    },

    async addimg(req, res) {
        const image = req.file.filename
        
        const livros = await Livro.create({ image, ...req.body })

        return res.json(livros)
    }

}