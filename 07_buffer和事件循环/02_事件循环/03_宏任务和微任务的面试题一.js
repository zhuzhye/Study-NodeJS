setTimeout(function () {
  console.log("set1");
  new Promise(function (reslove) {
    reslove();
  }).then(function () {
    new Promise(function (reslove) {
      reslove();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2");
  });
});

new Promise(function (reslove) {
  console.log("pr1");
  reslove();
}).then(function () {
  console.log("then1");
});

setTimeout(function () {
  console.log("set2");
});

console.log(2);

queueMicrotask(() => {
  console.log("queueMicrotask1");
});

new Promise(function (reslove) {
  reslove();
}).then(function () {
  console.log("then3");
});

// pr1 2 then1 queueMicrotask1  then3 set1 then2 then4 set2

// script执行 clg(pr1) console.log(2)

// 微任务队列  then1 queueMicrotask1 then3

// 宏任务队列  setTimeout1回调 setTImeout2回调

// 开始第二个宏任务 setTimeout

// 微任务队列

// 宏任务队列
