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
        this.belongsToMany(models.Livro, { through: models.AutorLivro, foreignKey: 'autor_id', as: 'livro' });
    }
}


module.exports = Autor;