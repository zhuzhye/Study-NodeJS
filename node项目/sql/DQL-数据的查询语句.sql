#先建立一张products表
CREATE TABLE IF NOT EXISTS `products`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`brand` VARCHAR(20),
	`title` VARCHAR(100) NOT NULL,
	`price` DOUBLE NOT NULL,
	`score` DECIMAL(2,1),
	`voteCnt` INT,
	`url` VARCHAR(20),
	`pid` INT
);

#1.基本查询
	#查询表中所有字段以及所有数据
	SELECT * FROM products;

	#查询指定的字段
	SELECT title , price FROM `products`;
	
	#对字段结果起一个别名
	SELECT `title` as `phoneTitle` , `price` as `currentPrice` From `products` ;

#2.where条件
	#2.1条件判断语句
		#案例一：查询价格小于1000的手机
	-- 	SELECT * FROM `products` WHERE price < 1000;
		SELECT title ,price FROM `products` WHERE price < 1000;
		
		#案例二：价格等于999的手机
	-- 	SELECT * FROM `products` WHERE price = 999
		SELECT `title` as `tt` , `price` FROM `products` WHERE price = 999;
		
		#案例三：价格不等于999的手机
		SELECT * FROM	`products` WHERE price != 999;
		SELECT * FROM `products` WHERE price <> 999;
		
		#案例四：查询品牌是华为的手机
		SELECT * FROM `products` WHERE `brand` = '华为';
		
	#2.2逻辑运算语句
		#案例一：查询1000到2000的手机
		SELECT * FROM `products` WHERE price > 1000 AND price <2000;
		SELECT * FROM `products` WHERE price > 1000 && price <2000;
		
		# BETWEEN AND 包含等于
		SELECT * FROM `products` WHERE price BETWEEN  1099 AND 2000;
		
		#案例二：价格在5000以上或者品牌是华为的手机
		SELECT * FROM `products` WHERE `price` > 5000 OR `brand` = '华为';
		SELECT * FROM `products` WHERE `price` > 5000 || `brand` = '华为';
		
		#将某些值设置为null 
		-- UPDATE `products` SET url = NULL WHERE `id` >= 20 AND id <=30;

		#案例三：查询某个值为NULL 或不为NULL
		SELECT * FROM `products` WHERE url IS NULL;
		SELECT * FROM `products` WHERE url IS NOT NULL;

	 #2.3模糊查询 %匹配任意个任意字符 _匹配任意字符
	 SELECT * FROM `products` WHERE `title` LIKE '%M%';
	 SELECT * FROM `products` WHERE `title` LIKE '_p%'
	 
	 #2.4IN 表示取多个值中的其中一个即可 
	 SELECT * FROM `products` WHERE `brand` IN ('华为' , '小米' , '苹果') ORDER BY price ASC,score DESC;

#3.结果排序
	#按价格升序，当价格一样时，按分数降序
	SELECT * FROM `products` WHERE `brand` IN ('华为' , '小米' , '苹果') ORDER BY price ASC,score DESC;

#4.分页查询
	#LIMIT  OFFSET   0 开始取20条
	SELECT * FROM `products` LIMIT 20 OFFSET 0
	SELECT * FROM `products` LIMIT 20 OFFSET 20
	# 0 开始取20条
	SELECT * FROM `products` LIMIT 0 , 20