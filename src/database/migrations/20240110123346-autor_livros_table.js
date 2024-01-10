'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('autor_livros', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true

      },
      livro_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'livros',
        },
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      autor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'autors',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('autor_livros')
  }
};
