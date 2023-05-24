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
        JSON_OBJECT('id', u.id, 'name', u.name) user,
        (SELECT COUNT(*) FROM comment WHERE moment_id = m.id) commentCount,
        (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount
        FROM moment m
        LEFT JOIN user u ON m.user_id = u.id
        LIMIT ?, ?;`;
        console.log(offset, size);
        const [result] = await database.execute(statement, [String(offset), String(size)]);
        console.log(result);
        return result;
    }

    //获取动态详情
    async getMomentById(momentId) {
        const statement = `SELECT
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) user,
        (SELECT JSON_ARRAYAGG(JSON_OBJECT('id', c.id, 'content', c.content, 'createTime', c.createAt, 'commentId', c.comment_id ,'user', JSON_OBJECT('id', u.id, 'name', u.name)))
        FROM comment c
        LEFT JOIN user u ON c.user_id = u.id
        WHERE c.moment_id = m.id) commentList,
        (SELECT JSON_ARRAYAGG(JSON_OBJECT('id', l.id, 'name', l.name))
        FROM (
            SELECT ml.label_id
            FROM moment_label ml
            WHERE ml.moment_id = m.id
        ) ml
        LEFT JOIN label l ON ml.label_id = l.id) labelList
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
    //删除动态
    async remove(momentId) {
        const statement = `DELETE FROM moment WHERE id = ?;`;
        const [result] = await database.execute(statement, [momentId]);
        return result;
    }

    //是否存在label
    async hasLabel(momentId, labelId) {
        const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?;`;
        const [result] = await database.execute(statement, [momentId, labelId]);
        // return result[0] ? true : false;
        return !!result.length;
    }

    //添加标签
    async addLabel(momentId, labelId) {
        const statement = `INSERT INTO moment_label (moment_id, label_id) VALUES (?, ?);`;
        const [result] = await database.execute(statement, [momentId, labelId]);
        return result;
    }

}

module.exports = new MomentService();