const path = require("path");
const basePath = "/User/zzy";
const filename = "abc.txt";

const filepath = path.resolve(basePath, filename);
console.log(filepath);
