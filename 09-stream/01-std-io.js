#!/usr/bin/node
<<<<<<< HEAD

const stdin = process.stdin,
      stdout = process.stdout;

stdin.resume();

stdin.on('data', function(data) {
    stdout.write(data.toString('utf8').toUpperCase());

});

stdin.on('end', function() {
    stdout.end();

});

=======
const stdin  = process.stdin,
            stdout = process.stdout;

stdin.setEncoding('utf8');

stdin.on('data', (data) => {
    stdout.write(data);

});

stdin.push('hello world!');
//stdin.push(null);
//stdin.pipe(stdout);

for(var c='a'.charCodeAt(0); c<='z'.charCodeAt(0); c++) {
  stdout.write(String.fromCharCode(c));
 }

 stdout.write('\n');
}
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
