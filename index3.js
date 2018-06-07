const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
//解析cookie
app.use(cookieParser('aasdadadwrqf'));//下面如果使用了签名，这里必须进行签名认证
//cookie session
app.use(cookieSession({
    keys:['aa','bb','cc','dd','ee'],//session加密用的key
    maxAge:2*3600*1000,//过期时间
    name:'user'//名字
}));
/*app.use('/aaa',function (req,res) {
    req.secret='aasdadadwrqf';//使用该字符串签名，默认也会签名signed:true
    res.cookie('user','李四',{signed:true,path:'/aaa',maxAge:30*24*1000});
    res.cookie('pass','123',{maxAge:30*20*1000*1000});
    res.clearCookie('pass');//清除cookie
    console.log(req.signedCookies);//签过名的cookie
    console.log(req.cookies);//没有签名的cookie
    res.send('ok');
});*/

app.use('/',function (req,res) {
    console.log(req.session['user']);//undefined
    delete req.session;//删除session
    res.send('ok');
});
let arr=[];
arr.push('mm');
app.listen(8080);