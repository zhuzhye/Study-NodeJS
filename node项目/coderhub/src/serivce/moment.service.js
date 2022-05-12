const connection = require("../app/database");
const sqlFragment = `SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime ,JSON_OBJECT('id',u.id,'name',u.name) author
FROM moment m LEFT JOIN users u ON m.user_id = u.id`;
class momentService {
  async create(user_id, content) {
    const statement = `INSERT INTO moment (user_id,content) VALUES (?,?)`;
    const [result] = await connection.execute(statement, [user_id, content]);
    return result;
  }

  async getMomentById(id) {
    const statement = `${sqlFragment} WHERE m.id=?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
  async getMomentlist(current, page) {
    current = Number(current - 1) * 10;
    // const statement = `${sqlFragment} LIMIT ?,?`;
    const statement = ` SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime ,JSON_OBJECT('id',u.id,'name',u.name )author,(SELECT COUNT(*) FROM comment c WHERE c.moment_id=m.id) commentcount
    FROM moment m LEFT JOIN users u ON m.user_id = u.id  LIMIT ?,?`;
    const [result] = await connection.execute(statement, [current.toString(), page]);
    return result;
  }
  async update(content, id) {
    const statement = `UPDATE moment SET content=? WHERE id=?`;
    const [result] = await connection.execute(statement, [content, id]);
    return result;
  }
  async remove(id) {
    const statement = `DELETE FROM moment WHERE id=? `;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new momentService();
