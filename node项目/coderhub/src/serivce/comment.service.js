const connection = require("../app/database");
class commentService {
  async create(userid, content, momentId) {
    const statement = `INSERT INTO comment (user_id,content,moment_id) VALUES (?,?,?)`;
    const [result] = await connection.execute(statement, [userid, content, momentId]);
    return result;
  }
  async reply(userid, content, momentId, commentId) {
    const statement = `INSERT INTO comment (user_id,content,moment_id,comment_id) VALUES (?,?,?,?)`;
    const [result] = await connection.execute(statement, [userid, content, momentId, commentId]);
    return result;
  }
  async update(commentId, content) {
    const statement = `UPDATE comment SET content=? WHERE id =?`;
    const [result] = await connection.execute(statement, [content, commentId]);
    return result;
  }
  async remove(commentId) {
    const statement = `DELETE FROM comment WHERE id =?`;
    const [result] = await connection.execute(statement, [commentId]);
    return result;
  }
  async getCommentById(momentId) {
    const statement = `SELECT * FROM comment WHERE moment_id =?`;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }
}
module.exports = new commentService();
