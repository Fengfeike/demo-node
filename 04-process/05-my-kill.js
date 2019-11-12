#!/usr/bin/node
<<<<<<< HEAD

var pid = process.argv[2],
    sgn = process.argv[3];

process.kill(pid,sgn);
=======
onst sig = process.argv[2],
           pid = process.argv[3];

if(process.argv.length !== 4 || isNaN(Number(pid))){
    console.error('命令行参数错误！');
      process.exit(1);

}

process.kill(pid, sig);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
