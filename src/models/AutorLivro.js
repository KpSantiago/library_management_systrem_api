const { DataTypes, Model } = require('sequelize');

class AutorLivro extends Model {
    static init(sequelize) {
        super.init({
            livro_id: DataTypes.NUMBER,
            autor_id: DataTypes.NUMBER,
        }, { sequelize })
    }
    static associete(models) {
        this.belongsToMany(models.Livro, { through: models.AutorLivro, foreignKey: 'autor_id', as: 'livro' });
        this.belongsToMany(models.Autor, { through: models.AutorLivro, foreignKey: 'livro_id', as: 'autor' });
    }
}
module.exports = AutorLivro;