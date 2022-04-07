// 1.应用级别的中间件:通过app.use()或app.get()或app.post()，绑定到app实例上的中间件，叫做应用级别的中间件
// 2.路由级别的中间件:绑定到express.Router()实例上的中间件,叫做路由级别的中间件.他的用法和应用级别中间件没有任何区别.只不过应用级别的中间件是绑定到app实例上,路由级别的中间件绑定到router实例上
// 3.错误级别的中间件:专门用来捕获整个项目发生的异常错误,从而防止项目异常奔溃.格式:错误级别的中间件的function处理函数中,必须有4个形参,形参先后顺序分别为 err ,req ,res ,next
/* 4.express内置中间件: 
      1.express.static快速托管静态资源的内置中间件:例如:HTML文件,图片,css样式等
      2.express.json解析json格式的ing求数据(有兼容性,仅在4.16.0+版本可以) 
        app.use(express.json) 配置解析application/json格式数据的内置中间件
      3.express.urlencoded解析URL-encoded格式的请求数据(有兼容性,仅在4.16.0+版本可用)
        app.use(express.urlencoded({extended:false})) 配置解析 application/x-www-form-urlencoded格式数据的内置中间件
*/
/* 5.第三方的中间件:
      非express官方内置的,而是第三方开发出来的中间件,叫做第三方中间件, 例如body-parser
      1.npm i body-parser
      2.require导入中间件
      3.app.use注册中间件
*/
