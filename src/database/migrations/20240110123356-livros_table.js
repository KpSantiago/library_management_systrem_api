'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('livros', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      esta_disponivel: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      data_emissao: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      data_devolucao: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      data_devolucao_estimada: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      dias_para_devolucao: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: 15
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'sm'
      },
      sinopse: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    return queryInterface.dropTable('livros')
  }
};
