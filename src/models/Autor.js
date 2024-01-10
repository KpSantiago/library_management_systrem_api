const { DataTypes, Model } = require('sequelize');

class Autor extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: DataTypes.STRING
            },
            {
                sequelize
            })
    }
    static associete(models) {
        this.belongsToMany(models.Livro, { through: 'autores_livros', foreignKey: 'autor_id', as: 'livro' })
    }
}


module.exports = Autor;