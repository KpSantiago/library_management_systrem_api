'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      esta_multado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      livro_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'livros',
          key: 'id'
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
    return queryInterface.dropTable('alunos')
  }
};
