const express=require('express');
const expressStatic=require('express-static');
const app=express();
//解析post数据
const bodyParser=require('body-parser');

app.listen(8080,function (req,res) {
});

//使用next() 链式调用
app.use('/',function (req,res,next) {
    console.log('a');
    next();
});
app.use('/',function (req,res) {
    console.log('b');
});

app.use(expressStatic('./www'));