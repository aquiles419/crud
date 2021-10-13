import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/users';
import Company from '../app/models/Company';

const models = [User,Company];


class Database{
    constructor(){
        this.init();
    }

    init(){
        // conexão com o banco (models)
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database;