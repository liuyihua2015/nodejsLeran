const mysql = require('mysql2');

//1.创建连接对象
const connection = mysql.createConnection({
    host: 'localhost',
    root: 3306,
    database: 'myblog',
    user: 'root',
    password: 'liuyihua',
});


//3.执行数据操作
//connection.query language : sql语句
const sql = 'SELECT * FROM `blog`;';
connection.query(sql, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}
);

//4.关闭连接
connection.end();