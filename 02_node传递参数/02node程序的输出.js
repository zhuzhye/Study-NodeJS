// console.log("hello nodes");

console.log(process.argv[2]);
// 清理控制台
console.clear()
process.argv.forEach(item=>{
  console.log(item);
})
function foo (){
  bar()
}

function bar (){
  // 函数的调用栈
  console.trace()
}
foo()