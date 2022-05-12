#1.基本数据模拟
CREATE TABLE IF NOT EXISTS `students`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	`age` INT 
);

CREATE TABLE IF NOT EXISTS courses(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	`price` DOUBLE
)

INSERT INTO `students` (name,age) VALUES ('zzy' ,18);
INSERT INTO `students` (name,age) VALUES ('tom',22);
INSERT INTO `students` (name,age) VALUES ('lilei',25);
INSERT INTO `students` (name,age) VALUES ('lucy',16);
INSERT INTO `students` (name,age) VALUES ('lily',20);

INSERT INTO `courses` (name,price) VALUES('英语',100);
INSERT INTO `courses` (name,price) VALUES('语文',666);
INSERT INTO `courses` (name,price) VALUES('数学',888);
INSERT INTO `courses` (name,price) VALUES('历史',80);
INSERT INTO `courses` (name,price) VALUES('物理',899);
INSERT INTO `courses` (name,price) VALUES('地理',990);
#2.建立关系表
CREATE TABLE IF NOT EXISTS `students_select_source` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	student_id INT NOT NULL,
	course_id INT NOT NULL ,
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE ,
	FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE 
)

#3.学生选课
#why选择英文，数学。历史
INSERT INTO `students_select_source`  (student_id,course_id) VALUES (1,1);
INSERT INTO `students_select_source`  (student_id,course_id) VALUES (1,3);
INSERT INTO `students_select_source`  (student_id,course_id) VALUES (1,4);

INSERT INTO `students_select_source`  (student_id,course_id) VALUES (3,2);
INSERT INTO `students_select_source`  (student_id,course_id) VALUES (3,4);

INSERT INTO `students_select_source`  (student_id,course_id) VALUES (5,2);
INSERT INTO `students_select_source`  (student_id,course_id) VALUES (5,3);
INSERT INTO `students_select_source`  (student_id,course_id) VALUES (5,4);

#4.查询需求
#4.1查询所有有选择的学生，选择了哪些课程
SELECT `stu`.id AS studentId , `stu`.name AS studentName , `stu`.age AS studentAge, `cs`.id AS csId , `cs`.name AS csName, `cs`.price AS csPrice FROM `students` AS `stu`
INNER JOIN `students_select_source` AS `ssc`
ON `stu`.id = `ssc`.id
JOIN `courses` AS `cs` ON  ssc.course_id=cs.id;
 
#4.2查询所有学生的选课情况
SELECT `stu`.id AS studentId , `stu`.name AS studentName , `stu`.age AS studentAge, `cs`.id AS csId , `cs`.name AS csName, `cs`.price AS csPrice 
FROM `students` AS `stu`
LEFT JOIN `students_select_source` AS `ssc` ON 	`stu`.id=`ssc`.student_id
LEFT JOIN `courses` AS `cs` ON `ssc`.course_id=`cs`.id;

#4.2哪些学生是没有选课的
SELECT `stu`.id AS studentId , `stu`.name AS studentName , `stu`.age AS studentAge, `cs`.id AS csId , `cs`.name AS csName, `cs`.price AS csPrice 
FROM `students` AS `stu`
LEFT JOIN `students_select_source` AS `ssc` ON 	`stu`.id=`ssc`.student_id
LEFT JOIN `courses` AS `cs` ON `ssc`.course_id=`cs`.id 
WHERE `cs`.id IS NULL;


#4.2哪些课程是没有学生选择
SELECT `stu`.id studentId, `stu`.name studentName, `stu`.age studentAge , `cs`.id csId , `cs`.name csName ,`cs`.price csPrice
FROM `courses` AS `cs` LEFT JOIN `students_select_source` AS `ssc` ON  `cs`.id = `ssc`.course_id
LEFT JOIN `students` AS `stu` ON `ssc`.student_id = `stu`.id WHERE `stu`.id IS NULL;

 
SELECT `stu`.id AS studentId , `stu`.name AS studentName , `stu`.age AS studentAge, `cs`.id AS csId , `cs`.name AS csName, `cs`.price AS csPrice 
FROM `students` AS `stu`
RIGHT JOIN `students_select_source` AS `ssc` ON 	`stu`.id=`ssc`.student_id
RIGHT JOIN `courses` AS `cs` ON `ssc`.course_id=`cs`.id 
WHERE `stu`.id IS NULL;

#4.2查询哪个学生课程

SELECT `stu`.id AS studentId , `stu`.name AS studentName , `stu`.age AS studentAge, `cs`.id AS csId , `cs`.name AS csName, `cs`.price AS csPrice 
FROM `students` AS `stu`
LEFT JOIN `students_select_source` AS `ssc` ON 	`stu`.id=`ssc`.student_id
LEFT JOIN `courses` AS `cs` ON `ssc`.course_id=`cs`.id
WHERE `stu`.id = 1


