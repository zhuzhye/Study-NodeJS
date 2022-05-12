#DML数据操作语言

#插入数据
INSERT INTO `user` VALUES (110,'why','1231234','2020-10-10','2020-11-11');
INSERT INTO `user` (`name`,`telphone`,`createTime`,`updateTime`) VALUES ('kobe','110110','2020-10-11','2020-11-11');
INSERT INTO `user` (`name`,`telphone`) VALUES ('kobe','11011011');
INSERT INTO `user` (`name`,`telphone`) VALUES ('mee','123');
INSERT INTO `user` (`name`,`telphone`) VALUES ('lucy','1234');
INSERT INTO `user` (`name`,`telphone`) VALUES ('lucy','12344');

#需求createTime和updateTime可以自动设置值 CURRENT_TIMESTAMP生成默认数据 ON UPDATE修改时生成默认数据
ALTER TABLE `user` MODIFY `createTime` TIMESTAMP DEFAULT  ;
ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

#删除所有数据
DELETE FROM `user`;
#删除符合条件的数据
DELETE FROM `user` WHERE `name` = 'lucy';

#更新所有数据
UPDATE `user` SET `name` = 'lucy' ,`telphone`='010' ;

#更新数据符合条件的数据
UPDATE `user` SET `name` = 'lily2' ,`telphone`='111111' WHERE `name` = 'mee';

DESC `user`
 
ALTER TABLE `user` DROP INDEX `phoneNum`;