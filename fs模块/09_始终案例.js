const fs = require("fs");
const path = require("path");
const regStyle = /<style>[\s\S]* <\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(
  path.join(__dirname, "./file/index.html"),
  { encoding: "utf-8" },
  function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    resoveCSS(data);
    resoveJS(data);
    resoveHTML(data);
  }
);

function resoveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr);
  console.log(r1);
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  fs.writeFile(path.join(__dirname, "./clock/index.css"), newCSS, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("写入成功");
  });
}

function resoveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr);
  const newJS = r2[0].replace("<script>", "").replace("</script>", "");
  fs.writeFile(path.join(__dirname, "./clock/index.js"), newJS, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("写入成功");
  });
}

function resoveHTML(htmlStr) {
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
    .replace(regScript, '<script src="./index.js"></script>');
  fs.writeFile(path.join(__dirname, "./clock/index.html"), newHTML, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("写入成功");
  });
}
