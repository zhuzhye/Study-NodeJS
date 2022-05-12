const mysql = require("mysql2");
// 1.创建数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "coderhub",
  user: "root",
  password: "zzy19980306",
});
// 2.执行sql语句
const statement = `SELECT * FROM products WHERE price > ? AND score > ?`;
connection.execute(statement, [5000, 7], (error, result) => {
  console.log(result);
});
