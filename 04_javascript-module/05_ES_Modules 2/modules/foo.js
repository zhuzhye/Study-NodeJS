const name = "why";
const age = "189";

// 导出方式三种
// 1方式一
// export const name = "why";
// export const age = "189";

// 2.方式二 {}统一导出
// 大括号不是一个对象
// {放置要导出的变量的引用列表}
export { name, age };

// 3.方式三：{}导出时，可以给变量起别名
// export { name as fName, age as fage };

export default function () {
  console.log("对某个对象进行格式化");
}
