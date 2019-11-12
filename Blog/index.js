const fs = require('fs');
const exp = require('express');
const bpr = require('body-parser');
const {users,chapterList} = require('./data');
const object = exp();

object.use(bpr.json());
object.use(bpr.urlencoded(
    {
    extended: true
    }
));
object.use(exp.static(__dirname));

object.get('/login_bg.jpg',(req,res)=>{
    res.sendFile(__dirname+'/logo_bg.jpg');
});

object.get('/',function(req,res){
  res.sendFile(__dirname+'/login.html');
});

object.get('/list/',(req,res)=>{
    res.sendFile(__dirname+'/list.html');
});

object.post('/login/',(req,res)=>{
    console.log(req.body.username,users[0].username);
    console.log(req.body.password,users[0].password);
    if(req.body.username === users[0].username && req.body.password === users[0].password){
        res.sendFile(__dirname+'/list.html');
    }else if(req.body.username === '' && req.body.password === ''){
        res.end('username or password is wrong!')
      }else if(req.body.password === '' && req.body.username !== ''){
        res.end('username or password is wrong!')
      }else if(req.body.username !== '' && req.body.password === ''){
        res.end('username or password is wrong!')
      }else{
        res.end('username or password is wrong!')
      }
    })

object.listen('8080');