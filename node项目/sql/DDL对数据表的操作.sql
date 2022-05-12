#查看所有表
SHOW TABLES;

#新建表
CREATE TABLE IF NOT EXISTS `student`(
	`name` VARCHAR (10) DEFAULT '',
	`age` int,
	`score` int,
	`height` DECIMAL(10,2),
	`birthday` YEAR,
	`phoneNumber` VARCHAR(20) UNIQUE NOT NULL
);

#删除表
DROP TABLE IF  EXISTS moment;

#查看某一个表结构
DESC users;

#查看创建表的sql语句
SHOW CREATE TABLE `student`;

#完整创建表的语法 UNIQUE不能重复 PRIMARY KEY 唯一值主键
CREATE TABLE iF NOT EXISTS `users`(
	`id` INT PRIMARY KEY  AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	`age` INT DEFAULT 0,
	`phoneNum` VARCHAR(20) UNIQUE ,
	`createTime` TIMESTAMP
)

#修改表
#1.修改表的名字
ALTER TABLE `users` RENAME TO `user`;

#2.添加一个新的列
ALTER TABLE `user` ADD `updateTime` TIMESTAMP;

#3.修改字段名称
ALTER TABLE `user` CHANGE `phoneNum` `telphone` VARCHAR(20);

#4.修改字段的类型
ALTER TABLE `user` MODIFY `name` VARCHAR(30);

#5.删除某一个字段
ALTER TABLE `user` DROP `age` ;

#6.根据一个表结构创建另外一个张表复制表结构
CREATE TABLE `user1` LIKE `user`;

#7.根据另外一个表中的所有内容，创建一个新的表
CREATE TABLE `user3` (SELECT * FROM `user`);