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
const sql = 'SELECT * FROM `blog` WHERE `id` = ?;';
const sqlParams = [1];
pool.promise().execute(sql, sqlParams)
    .then(([rows, fields]) => {
        console.log(rows);
        console.log(fields);
    })
    .catch((err) => {
        console.error(err);
    });
