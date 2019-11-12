#!/usr/bin/node
<<<<<<< HEAD

const msg = ['Name','Email','QQ','Mobile'];
var usr={},i=0;

console.log(msg[i]+':');

process.stdin.on('data',function(data){
  usr[msg[i]] = data.slice(0,data.length-1).toString('utf8');
  console.log(msg[++i]+':');
});

process.on('end',function(){
  console.log(usr);
=======
var me = {}, i = 1;

const msg = ['Name', 'Email', 'QQ', 'Mobile'];

process.stdout.write(msg[0] + ': ');

const stdin = process.stdin;

stdin.on('data', (data) => {
    me[msg[i-1]] = data.slice(0, data.length - 1).toString('utf8');
    if(i === 4) {
          console.log(me);
              process.exit();
                
    } else {
          process.stdout.write(msg[i++] + ': ');
            
    }

});

stdin.on('end', () => {
    console.log(me);

>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
});
