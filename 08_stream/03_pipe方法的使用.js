const fs = require("fs");
// fs.readFile("./foo.txt", (err, data) => {
//   fs.writeFile("./ab.txt", data, (err) => {
//     console.log(err);
//   });
// });

//steam的写法
const reader = fs.createReadStream("./foo.txt");
const writer = fs.createWriteStream("./foz.txt");
reader.pipe(writer);
writer.close();
