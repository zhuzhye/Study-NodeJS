#1，获取到的是笛卡尔乘积
SELECT * FROM `brand` ,`products`;
# 获取到的是笛卡尔乘积进行筛选
SELECT * FROM `products` , `brand` WHERE products.brand_id=brand.id
#2.左连接
#2.1查询所有手机(包括没有品牌信息的手机)以及对应品牌null
SELECT * FROM `products` LEFT OUTER JOIN `brand` ON products.brand_id = brand.id

#2.2查询没有对应品牌数据的手机
SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id WHERE brand.id is NULL;

#3.右连接
#3.1查询所有的品牌（没有对应的手机数据，品牌也显示）以及对应手机的数据
SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id;

#3.2查询没有对应品牌数据的手机
SELECT * FROM `products` RIGHT JOIN `brand` on products.brand_id=brand.id WHERE products.brand_id is NULL;

#4.内连接
SELECT * FROM `products`  JOIN `brand` ON products.brand_id= brand_id ;
SELECT * FROM `products`  JOIN `brand` ON products.brand_id= brand_id WHERE price=3388;

#5.全连接
-- mysql不支持此 FULL JOIN
(SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id=brand.id)
UNION
(SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id=brand.id)

(SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id=brand.id WHERE brand.id is NULL)
UNION
(SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id=brand.id WHERE products.brand_id is NULL)

