import Sequelize, { Model } from 'sequelize';

class Company extends Model {
        static init(sequelize)
            {
            super.init({
                nomeFantasia: Sequelize.STRING,
                razaoSocial: Sequelize.STRING,
                cpnj: Sequelize.STRING,
            },
                 {
                    sequelize,
                 }

            );

            return this;
        }

        static associate(models){
            this.belongsTo(models.User, {foreingKey: 'user_id', as: 'user'})
        }

}

export default Company;