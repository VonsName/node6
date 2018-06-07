const express=require('express');
const expressStatic=require('express-static');
const app=express();
//解析post数据
const bodyParser=require('body-parser');

app.listen(8080);

/*app.use(function (req,res,next) {
    req.on('data',function (data) {

    });
    req.on('end',function () {
        req.a=12;
        next();
    });
});
app.use(function (req,res) {
    console.log(req.a);
});*/
app.use(expressStatic('./www'));