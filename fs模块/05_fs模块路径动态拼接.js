const fs = require("fs");
const path = require("path");
const filepath = path.resolve(__dirname, "test.txt");
fs.readFile(filepath, "utf-8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
