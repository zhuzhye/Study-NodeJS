async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout0");
}, 440);
setTimeout(function () {
  console.log("setTimeout2");
}, 300);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick1"));
async1();
process.nextTick(() => console.log("nextTick2"));
new Promise(function (reslove) {
  console.log("promise");
  reslove();
  console.log("promise2");
}).then(function () {
  console.log("promise3");
});
console.log("script end");

// "script start"
// "async1 start"
// "async"
// "promise"
// promise2
// "script end"
// nextTick1
// nextTick2
// "async1 end“
// promise3
// setTimeout0
// setTimeout2
// setImmediate
