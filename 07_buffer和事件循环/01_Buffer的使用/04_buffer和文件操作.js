const fs = require("fs");
// npm install sharp 图片处理库
// fs.readFile("./111.png", (err, data) => {
//   console.log(data);
//   fs.writeFile("./foo.png", data, (err) => {
//     console.log(err);
//   });
// });

const sharp = require("sharp");
// sharp("./foo.png").resize(200, 200).toFile("./baz.png");

// npm i sharp
// sharp("./foo.png")
//   .resize(300, 300)
//   .toBuffer()
//   .then((data) => {
//     fs.writeFile("./bax.png", data, (err) => {
//       console.log(err);
//     });
//   });
sharp("./foo.png").resize(200, 200).toFile("./v.png");
