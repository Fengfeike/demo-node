#!/usr/bin/node
<<<<<<< HEAD

=======
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
const stdin  = process.stdin,
            stdout = process.stdout,
                  Trans  = require('stream').Transform;

stdin.setEncoding('utf8');

var tf = new Trans();

tf._transform = function(chunk, encoding, callback) {
    this.push(Buffer(chunk.toString('utf8').toUpperCase()));
      callback();

};

stdin.pipe(tf).pipe(stdout);
<<<<<<< HEAD

=======
© 2019 GitHub, Inc.
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
