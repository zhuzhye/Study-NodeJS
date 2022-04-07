const http = require("http");
//创建一个web服务器
const server = http.createServer((req, res) => {
  // console.log(req.headers);
  /*
    content-type是这次请求携带的数据的类型
    application/json表示一个json类型
    text/plain表示文本类型
    application/xml 表示xml类型
    multipart/form-data表示文件上传类型
  */

  /*
    content-length:文件大小和长度
  */

  /*
    keep-alive:
    http是基于tcp协议的，但是通常在进行一次请求和响应结束后会立刻中断
    在http1.0中,想要继续保持连接:
        浏览器需要在请求头中添加connection:keep-alive
        服务器需要在响应头中添加connection:keep-alive
        当客户再次请求时，就会使用同一个连接，直接一方中断连接
    在http:1.1中，所有连接默认都是connection:keep-alive
        不同的web服务器会有不同的保持keep-alive的时间
        node默认为5s
  */

  /*
    accept-encoding:告知服务器，客户端支持的文件压缩格式，比如js文件可以使用gzip编码，对应.gz文件
  */
  /*
    accept:告知服务器，客户端可接受文件的格式
  */
  /*
    user-agent:客户端相关信息
  */
  req.on("data", (data) => {
    // console.log(data);
  });
  res.end("请求成功");
});
server.listen("8888", "127.0.0.1", () => {
  console.log("启动服务成功");
});
