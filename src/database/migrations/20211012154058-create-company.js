'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('company', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
       },
       nomeFantasia:{
         type: Sequelize.STRING,
         allowNull: false,
       },
       razaoSocial:{
         type: Sequelize.STRING,
         allowNull:false,
         unique: true,
       },
       cnpj: {
        type: Sequelize.STRING,
        allowNull:false,
       },
       user_id:{
        type: Sequelize.INTEGER,
        references: {model: 'users', key:'id'},
        allowNull:false,
       },
       created_at:{
         type: Sequelize.DATE,
         allowNull:false,
       },
       updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },

      });
     
  },

  down: async (queryInterface) => {
   
     await queryInterface.dropTable('company');
     
  }
};
