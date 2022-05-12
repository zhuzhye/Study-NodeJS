#将联合查询到的数据转换成对象（一对多）
SELECT
	products.id AS id,
	products.title AS title,
	products.price AS price,
	JSON_OBJECT( 'id', brand.id, 'name', brand.NAME, 'website', brand.website ) AS brand 
FROM
	`products`
	LEFT JOIN `brand` ON `products`.brand_id = `brand`.id 
	
#将查询到的多条数据，组成多项，存入一个数组中
SELECT
	stu.id,
	stu.NAME,
	stu.age,
	JSON_ARRAYAGG(
	JSON_OBJECT( 'id', cs.id, 'name', cs.NAME, 'price', cs.price )) 
FROM
	`students` stu
	JOIN `students_select_source` ssc ON stu.id = ssc.student_id
	JOIN `courses` cs ON ssc.course_id = cs.id 
GROUP BY
	stu.id