#!/usr/bin/node
<<<<<<< HEAD

const http = require('http'),
      fs = require('fs');

http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return;
  var fileName = _dirname + req.url;
  console.log(fileName);
  res.end(fs.readFileSync(fileName));
  //fs.createReadStream(fileName).pipe(res);
  
 // res.end(fs.readFileSync(fileName).toString('utf8'));
 // res.end('hello');
}).listen(8080);
console.log(process.pid);



=======
const http = require('http'),
            log  = console.log,
                  fs   = require('fs');

http.createServer((req, res) => {
    log('==========');
    log(req.headers);

    var file = __dirname + req.url;
      fs.readFile(file, (err, data) => {
      if(err) {
              log(err.message);
              res.statusCode = 404;
              res.end(err.message);
                                  
      } else {
            res.end(data);
                      
      }
            
    });

}).listen(8080);
log(process.pid);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
