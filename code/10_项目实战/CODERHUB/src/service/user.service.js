const database = require('../app/database');

class UserService {
    async create(user) {
        //1.获取用户 user 对象
        const { name, password } = user;

        //2.拼接statement
        const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;

        //3.执行sql语句
        return await database.execute(statement, [name, password]);
    }

    async getUserByName(name) {
        //1.拼接statement
        const statement = `SELECT * FROM user WHERE name = ?;`;

        //2.执行sql语句
        const [values] = await database.execute(statement, [name]);
        
        return values;
    }

}

module.exports = new UserService();