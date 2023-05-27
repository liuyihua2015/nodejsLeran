const crypto = require('crypto');

function md5password(password) {
    const md5 = crypto.createHash('md5');

    md5.update(password);

    password = md5.digest('hex');

    return password  
}

module.exports = md5password;