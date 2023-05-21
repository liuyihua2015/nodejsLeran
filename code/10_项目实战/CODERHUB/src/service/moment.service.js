const { string } = require('sharp/lib/is');
const database = require('../app/database');

class MomentService {
    //创建动态
    async create(userId, content) {
        const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`;
        const [result] = await database.execute(statement, [content, userId]);
        return result;
    }
    
    //获取动态列表
    async getMomentList(offset = 0, size = 10) {
        const statement = `SELECT m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) author
        FROM moment m
        LEFT JOIN user u ON m.user_id = u.id
        LIMIT ?, ?;`;
        console.log(offset, size);
        const [result] = await database.execute(statement, [String(offset) ,String(size)]);
        console.log(result);
        return result;
    }

    //获取动态详情
    async getMomentById(momentId) {
        const statement = `SELECT m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) author
        FROM moment m
        LEFT JOIN user u ON m.user_id = u.id
        WHERE m.id = ?;`;
        const [result] = await database.execute(statement, [momentId]);
        return result[0];
    }

    //更新动态
    async update(content, momentId) {
        const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
        const [result] = await database.execute(statement, [content, momentId]);
        return result;
    }

}

module.exports = new MomentService();