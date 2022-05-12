const p = function () {
  new Promise((reslove, rejcet) => {
    console.log("1");
    reslove();
  })
    .then((res) => {
      setTimeout(() => {
        console.log("2");
      });
    })
    .then((res) => {
      console.log("3");
    });
};
const p2 = function () {
  new Promise((reslove, rejcet) => {
    console.log("4");
    reslove();
  })
    .then((res) => {
      console.log("5");
    })
    .then((res) => {
      console.log("6");
    });
};
const p3 = async function () {
  await p();
  await p2();
};
p3();
