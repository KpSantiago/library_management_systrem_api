const { Model, DataTypes } = require("sequelize");

class Livro extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            esta_disponivel: DataTypes.BOOLEAN,
            data_emissao: DataTypes.DATE,
            data_devolucao: DataTypes.DATE,
            data_devolucao_estimada: DataTypes.DATE,
            dias_para_devolucao: DataTypes.NUMBER,
            sinopse: DataTypes.TEXT,
            image: DataTypes.TEXT,
            tipo: DataTypes.STRING
        }, { sequelize })
    }
    static associete(models) {
        this.belongsToMany(models.Autor, { through: models.AutorLivro, foreignKey: 'livro_id', as: 'autor' });
        this.hasOne(models.Aluno, { foreignKey: 'livro_id', as: 'aluno' })
    }
}


module.exports = Livro;
