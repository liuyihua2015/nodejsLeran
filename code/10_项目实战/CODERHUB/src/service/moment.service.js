const database = require('../app/database');

class MomentService {
    // 创建动态
    async create(userId, content) {
        const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`;
        const [result] = await database.execute(statement, [content, userId]);
        return result;
    }

}

module.exports = new MomentService();