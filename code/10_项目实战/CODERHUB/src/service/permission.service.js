const database = require('../app/database');

class permissionService {
    //验证权限
    async verifyPermission(tableName, id, userId) {
        const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`;
        const [result] = await database.execute(statement, [id, userId]);
        console.log(result);
        return result.length === 0 ? false : true;
    }
}

module.exports = new permissionService();
