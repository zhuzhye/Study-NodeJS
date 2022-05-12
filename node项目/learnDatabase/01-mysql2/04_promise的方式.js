const mysql = require("mysql2");
// 1.创建连接池
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "coderhub",
  user: "root",
  password: "zzy19980306",
  connectionLimit: 10, //最多建立几个连接
});

//2.使用连接池
const statement = `SELECT * FROM products WHERE price > ? AND score > ?`;
connection
  .promise()
  .execute(statement, [6000, 7])
  .then(([results]) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
