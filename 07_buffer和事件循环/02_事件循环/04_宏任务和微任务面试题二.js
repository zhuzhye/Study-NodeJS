async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
  new Promise(function (reslove) {
    reslove();
  })
    .then(function () {
      console.log("1111");
    })
    .then(function () {
      console.log("222");
    });
}

console.log("script s tart");
setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (reslove) {
  console.log("promise1");
  reslove();
})
  .then(function () {
    console.log("promise2");
  })
  .then(function () {
    console.log("promise3");
  });

console.log("script end");
