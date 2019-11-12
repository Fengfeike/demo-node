var exp = require('express');
var {users,chapterList} = require('../data.json');
var router = exp.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res,next){
  if(users[0].username === req.body.username && users[0].password === req.body.password){
    res.redirect('/Table');
  }else if(req.body.username === '' && req.body.password === ''){
    res.end('username or password is wrong!')
  }else if(req.body.username === '' && req.body.password !== ''){
    res.end('username or password is wrong!')
  }else if(req.body.password === '' && req.body.username !== ''){
    res.end('username or password is wrong!')
  }else{
    res.end('username or password is wrong!')
  }
});
module.exports = router;
