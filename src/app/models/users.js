import Sequelize, {Model}from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize){
    super.init(
        {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
        },
        {
            sequelize,
        }
        
    );
        // criptografia das senhas dos usuarios
    this.addHook('beforeSave', async user =>{
        if(user.password){
            user.password_hash = await bcrypt.hash(user.password,8);
        }
    });

    return this;
 }
 // comparador de senha hash
    checkPassword(password){
        return bcrypt.compare(password, this.password_hash);
    }

}

export default User;