#!/usr/bin/node
<<<<<<< HEAD

const http = require('http'),
            fs = require('fs');

http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return;
  var fileName = _dirname + req.url;
  console.log(fileName);
  //res.end(fs.readFileSync(fileName));
  fs.createReadStream(fileName).pipe(res);
}).listen(8080);
console.log(process.pid);

=======
onst http = require('http'),
           log  = console.log,
                 fs   = require('fs');

var web = http.createServer();
web.listen(8080);

web.on('request', (req, res) => {
    log('==========');
    log(req.headers);

    var file = __dirname + req.url;

          /*
           *   var s = fs.createReadStream(file);
           *     s.on('error', (err) => {
           *         console.log(err.message);
           *             res.statusCode = 404;
           *                 res.end(err.message);
           *                   });
           *                     s.pipe(res);
           *                       */

    if(fs.existsSync(file)) {
          fs.createReadStream(file).pipe(res); 
                
    } else {
          res.statusCode = 404;
          res.end(req.url + ' not exist!');
                    
    }
});
log(process.pid);
})
})
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
