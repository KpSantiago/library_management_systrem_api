const Aluno = require('../models/Aluno');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Livro = require('../models/Livro');
require('dotenv').config();

module.exports = {
    async getAlunos(req, res) {
        Aluno.removeAttribute('senha')
        try {
            const alunos = await Aluno.findAll({ include: [{ model: Livro, as: 'livro' }] });

            return res.status(200).json({ data: alunos })
        } catch (err) {
            return res.json({ message: 'ocorreu um erro inesperado', erro: err })
        }
    },
    async getOneAluno(req, res) {
        try {
            Aluno.removeAttribute('senha')
            const { id } = req.params;
            const alunos = await Aluno.findAll({ where: { id } });

            return res.status(200).json({ data: alunos })
        } catch (err) {
            return res.json({ message: 'ocorreu um erro inesperado', erro: err })
        }
    },
    async cadastro(req, res) {
        const { nome, senha, email } = req.body;

        if (!nome || !senha || !email) {
            return res.status(401).json({ error: true, message: 'Dados inválidos (nome, email ou senha).' })

        }



        if (await Aluno.findAll({ where: { email } })) {
            return res.status(401).json({ error: true, message: 'Usuário já existe, tente novamente.' });
        }

        const salt = await bcrypt.salt(12);
        const senhaHash = await bcrypt.hash(senha, salt)

        try {
            const alunos = await Aluno.create({ nome, senha: senhaHash, email });
            return res.status(200).json({
                message: 'usuário criado com sucesso',
                data: alunos
            });
        } catch (err) {
            return res.status(400).json({ message: 'ocorreu um erro inesperado', erro: err })
        }

    },
    async login(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(401).json({ error: true, message: 'Email ou senha inválidos.' });
        }

        const aluno = await Aluno.findAll({ where: { email } });


        if (aluno.length == 0) {
            return res.status(401).json({ error: true, message: 'Aluno não encontrado, tente novamente.' });
        }

        if (aluno.length > 0) {
            const senhaHash = await bcrypt.compare(senha, aluno[0].senha)
            if (!senhaHash) {
                return res.status(401).json({ error: true, message: 'Senha incorreta!' });
            }
        }


        try {
            const secret = process.env.SECRET;
            const token = jwt.sign({
                id: aluno[0].id,
                nome: aluno.nome
            }, secret)

            return res.status(200).json({
                message: 'Usuário autenticado!',
                data: {
                    id: aluno[0].id,
                    livro_id: aluno[0].livro_id,
                    token
                }
            })

        } catch (err) {
            return res.json({ message: 'ocorreu um erro inesperado', erro: err })
        }
    },
    async purchaseBook(req, res) {
        const { id } = req.params;
        const { livro_id, updated_at } = req.body
        if (!id) {
            return res.status(401).json({
                error: true,
                message: 'Verifique se a referência do livro foi mandada.'
            });
        }

        try {
            const alunos = await Aluno.update(
                {
                    livro_id,
                    updatedAt: updated_at
                },
                {
                    where: { id }
                }
            );
            return res.status(200).json({
                message: 'Livro adquirido!',
                data: alunos
            })
        } catch (err) {
            return res.status(400).json({ message: 'ocorreu um erro inesperado', erro: err })
        }
    }
}