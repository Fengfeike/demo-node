#!/usr/bin/node
<<<<<<< HEAD

const read  = require('stream').Readable;

function MyReadable() {
   read.call(this);

};

MyReadable.prototype = read.prototype;

var c = 'a'.charCodeAt(0);
MyReadable.prototype._read = function() {
    this.push(String.fromCharCode(c++));
    if(c>'z'.charCodeAt(0)) this.push(null);

};

module.exports = MyReadable;




=======
const Readable = require('stream').Readable;

var c = 'a'.charCodeAt(0);

var MyReadable = function() {
    Readable.call(this);

};

MyReadable.prototype = Readable.prototype;

MyReadable.prototype._read = function() {
    this.push(String.fromCharCode(c++));
      if(c>'z'.charCodeAt(0)) this.push(null);

};

var rs = new MyReadable();
rs.pipe(process.stdout);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
