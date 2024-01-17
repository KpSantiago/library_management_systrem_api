const { DataTypes, Model } = require('sequelize');

class AutorLivro extends Model {
    static init(sequelize) {
        super.init({
            livro_id: DataTypes.NUMBER,
            autor_id: DataTypes.NUMBER,
        }, { sequelize })
    }
}
module.exports = AutorLivro;