const { DataTypes, Model } = require('sequelize');

class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            livro_id: DataTypes.NUMBER
        }, { sequelize })
    }

    static associete(models) {
        this.belongsTo(models.Livro, { foreignKey: 'livro_id', as: 'livro' })
    }
}


module.exports = Aluno