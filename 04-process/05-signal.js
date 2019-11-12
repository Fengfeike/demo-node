#!/usr/bin/node
<<<<<<< HEAD

process.on('SIGINT',()=>{
  console.log('you process ctrl+C or kill -2');

  process.exit();
})

process.on('SIGTSTP',()=>{
  console.log('you press ctr +z');
})
process.stdin.resume();
=======
const log = console.log;

log('process id:', process.pid);

process.stdin.resume();

process.on('SIGINT', () => {
    log('your press ctrl-c, good bye');
      process.exit();

});

process.on('SIGTSTP', () => {
    log('you press ctrl-z, stop running');
      process.exit();

});
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
