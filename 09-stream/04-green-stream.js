#!/usr/bin/node
<<<<<<< HEAD

const write = require('stream').Writable;

function GreenStream(){
  write.call(this);
}

GreenStream.prototype=write.prototype;
GreenStream.prototype._write=function(chunk,encoding,callback){
  process.stdout.write('\033[1;32m' + chunk.toString('utf8') + '\033[1;37m');
  callback();
}

module.exports = GreenStream;

=======
const Writable = require('stream').Writable;

function GreenStream() {
    Writable.call(this);

}

GreenStream.prototype = Writable.prototype;

GreenStream.prototype._write = (chunk, encoding, callback) => {
    process.stdout.write('\033[1;32m' + chunk + '\033[1;37m');
      callback();
};

process.stdin.pipe(new GreenStream());]]')
}
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
