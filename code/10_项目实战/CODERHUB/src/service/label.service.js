const database = require('../app/database');

class labelService {

    async create(name) {
        const statement = `INSERT INTO label (name) VALUES (?);`;
        const [result] = await database.execute(statement, [name]);
        return result;
    }
}

module.exports = new labelService();