const Sequelize = require('sequelize');
const config = require('../config/database');

const Livro = require('../models/Livro');
const Autor = require('../models/Autor');
const Aluno = require('../models/Aluno');

const connection = new Sequelize(config);

Livro.init(connection);
Autor.init(connection);
Aluno.init(connection)

Livro.associete(connection.models);
Autor.associete(connection.models);
Aluno.associete(connection.models);

module.exports = connection;