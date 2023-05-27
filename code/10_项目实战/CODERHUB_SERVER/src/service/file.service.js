const database = require('../app/database');

class fileService {

    async createAvatar(filename, mimetype, size, userId) {
        const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);`;
        const [result] = await database.execute(statement, [filename, mimetype, size, userId]);
        return result;
    }

    //查询头像
    async getAvatarByUserId(userId) {
        const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
        const [result] = await database.execute(statement, [userId]);
        return result.pop();
    }
}

module.exports = new fileService();