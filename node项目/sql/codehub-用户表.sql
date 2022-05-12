CREATE TABLE IF NOT EXISTS `users` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL UNIQUE,
	password VARCHAR(20) NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

-- INSERT INTO  users (name,password) VALUES (?,?)
-- SELECT * FROM users WHERE name = 'zzy'
-- INSERT INTO moment (user_id,content) VALUES (4,'javascript是最好的语言')
truncate table comment //重新开始清除表
-- SELECT * FROM moment WHERE user_id =5

-- SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime ,JSON_OBJECT('id',u.id,'name',u.name) user
-- FROM moment m LEFT JOIN users u ON m.user_id = u.id WHERE m.user_id=5
-- 
-- SELECT * FROM moment WHERE id=? AND user_id=?

-- UPDATE moment SET content='zzy' WHERE id=1

-- CREATE TABLE IF NOT EXISTS `comment`(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	content VARCHAR(1000) NOT NULL,
-- 	moment_id INT NOT NULL ,
-- 	user_id INT NOT NULL,
-- -- 	评论id 
-- 	comment_id INT DEFAULT NULL, 
-- 	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- 	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- 	FOREIGN KEY (moment_id) REFERENCES moment(id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	FOREIGN KEY (user_id) REFERENCES `user`(id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	FOREIGN KEY (comment_id) REFERENCES comment(id) ON DELETE CASCADE ON UPDATE CASCADE
-- 	
-- )
 
 
-- INSERT INTO comment (user_id,content,moment_id) VALUES (5,'java',5)
SELECT * FROM comment WHERE moment_id =10
-- 查询评论数量
 SELECT m.id id,m.content content,m.createAt createTime,m.updateAt updateTime ,JSON_OBJECT('id',u.id,'name',u.name )author,(SELECT COUNT(*) FROM comment c WHERE c.moment_id=m.id) commentcount
 FROM moment m LEFT JOIN users u ON m.user_id = u.id  LIMIT 2,10