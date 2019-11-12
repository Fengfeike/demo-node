var exp = require('express');
var {users,chapterList} = require('../data.json');
var router = exp.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Table',{items:chapterList}
);
});
module.exports = router;
