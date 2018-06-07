const express=require('express');
const expressStatic=require('express-static');
const app=express();
//解析post数据
const bodyParser=require('body-parser');

app.listen(8080,function (req,res) {
});
app.route('/login').get(function (req,res) {
    console.log(req.query);
});

//解析post数据
app.use(bodyParser.urlencoded({
    extend:false,//扩展模式
    limit: 2*1024//限制post数据的大小
}));
app.use('/lo',function (req,res) {
    console.log(req.body);//req.body post数据
});

app.use(expressStatic('./www'));