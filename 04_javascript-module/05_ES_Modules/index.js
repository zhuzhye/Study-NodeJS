// console.log("hello esmodules");
// 常见的导入方式
// 1.方式一 import {} from '路径'
// import { name, age } from "./modules/foo.js";

// 2.方式二 导出变量之后可以起别名
// import { name as Wname, age as Wage } from "./modules/foo.js";

// 3.方式三 * as foo
// import * as foo from "./modules/foo.js";
// console.log(foo.name);

//演练export 和 import 结合
// import { name, age, qqq } from "./modules/bar.js";
// console.log(name, age, qqq);

// 演练：default export 如何导入
import format from "./modules/foo.js";
format();

// 演练import（） 函数

let flag = true;
if (flag) {
  // require 本质是一个函数
  // 执行函数
  // 如果是webpack的环境下：模块化打包工具：es commomJs require
  // 纯ES modules环境下面： import() 异步
  const promise = import("./modules/foo.js").then(({ name, age }) => {
    console.log(name);
    console.log(age);
  });
}
