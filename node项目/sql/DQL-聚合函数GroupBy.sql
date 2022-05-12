#1聚合函数的使用
	#求所有手机的价格总和
	SELECT SUM(`price`) AS `totalprice` FROM `products`;
	
	#求华为手机的价格总和
	SELECT SUM(`price`) AS `totalprice` FROM `products` WHERE `brand` = '华为';
	
	#求华为手机的平均价格
	SELECT AVG(price)  AS `avgprice` FROM `products` WHERE `brand` = '华为';
	
	#最高手机的价格和最低手机价格
	SELECT MAX(`price`) FROM `products`;
	SELECT MIN(`price`) FROM `products`;
	
	#求华为手机的个数
	SELECT COUNT(*) FROM `products` WHERE `brand` = '华为';
	SELECT COUNT(*) FROM `products` WHERE `brand` = '苹果';
	#没有url字段就不计算在内
	SELECT COUNT(`url`) FROM `products` WHERE `brand` = 'vivo';
	#将重复的值去除计算 
	SELECT COUNT(DISTINCT price) FROM `products`;

#2.GROUP BY的使用 通过品牌分组
SELECT `brand`,AVG(price) , COUNT(*), AVG(score) FROM `products` GROUP BY `brand`;

#3.HAVING使用 和 WHERE HAVING是分组后查询的条件
SELECT `brand`,AVG(price) AS avgPrice , COUNT(*), AVG(score) FROM `products` GROUP BY `brand` HAVING avgPrice > 2000;

#4.需求：求评分大于7.5的手机的平均的价格是多少
SELECT AVG(`price`) FROM `products` WHERE `score` > 7.5;

# 升级按照品牌进行分类
# 平均分大于7.5分的手机，按照品牌进行分类，求出平均值
SELECT `brand`,AVG(`price`) FROM `products` WHERE `score` > 7.5 GROUP BY `brand` 

