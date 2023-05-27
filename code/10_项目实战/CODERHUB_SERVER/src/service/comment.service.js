const database = require('../app/database');

class commentController {
    
    async create(momentId, content, userId) {
        const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);`;
        const [result] = await database.execute(statement, [content, momentId, userId]);
        return result;
    }

    //回复评论
    async reply(momentId, content, userId, commentId) {
        const statement = `INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`;
        const [result] = await database.execute(statement, [content, momentId, userId, commentId]);
        return result;
    }
}

module.exports = new commentController();