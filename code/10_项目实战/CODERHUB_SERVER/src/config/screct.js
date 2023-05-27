//获取私钥和公钥
const fs = require('fs');
const path = require('path');

const PRIVATEKEY = fs.readFileSync(path.join(__dirname, './keys/private.key'));
const PUBLICKEY = fs.readFileSync(path.join(__dirname, './keys/public.key'));

module.exports = {
    PRIVATEKEY,
    PUBLICKEY,
}