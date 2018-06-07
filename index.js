const express=require('express');
const expressStatic=require('express-static');
const app=express();
app.listen(8080,function (req,res) {
});
app.route('/login').get(function (req,res) {
    console.log(req.query);
});
app.use(expressStatic('./www'));