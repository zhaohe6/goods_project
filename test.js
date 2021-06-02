const express = require('express')
const request = require('request')
const app = express()


// 第二个参数:请求结果回调函数,会传入3个参数,第一个错误,第二个响应对象,第三个请求数据

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/search',function(req,res){
    console.log(req.query)
    var url = `https://api.bilibili.com/x/web-interface/search/type&page=1&order=click&
    keyword=`+req.query.key+`&search_type=video`
    //这里是请求模块，nodejs将请求发送给bilibil，并且将拿到的数据返回到前端
    request(url,function (error, response, data) {
        res.send(data)
    });
})
app.listen(3000,function(){
    console.log('3000 start')
})