const mysql = require('mysql2');

//1.创建连接池
const connectionPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'coderhub',
    user: 'root',
    password : 'liuyihua',
    connectionLimit: 5 
});

//2.获取链接是否成功
connectionPool.getConnection((err, connection) => {
    if (err) {
        console.log('数据库连接失败~', err);
        return;
    } 
    //3.获取connection对象,尝试和数据库建立一下连接


    connection.connect((err) => {
        if (err) {
            console.log('数据库连接失败~', err);
            return;
        }
        console.log('数据库连接成功,可以进行数据操作了~');
    });
});

//4.获取连接池中连接对象的promise版本
const connection = connectionPool.promise();

module.exports = connection;