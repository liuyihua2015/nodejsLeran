const mysql = require('mysql2');

//1.创建连接池
const pool = mysql.createPool({
    host: 'localhost',
    root: 3306,
    database: 'myblog',
    user: 'root',
    password: 'liuyihua',
    connectionLimit: 10,
});


//3.预处理
//connection.query language : sql语句
const sql = 'SELECT * FROM `blog` WHERE `title` = ? AND `author` = ?;';
const sqlParams = ['标题C', '作者C'];
pool.query(sql, sqlParams, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

//关闭
pool.end();