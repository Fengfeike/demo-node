#!/usr/bin/node
<<<<<<< HEAD

var n = process.argv[2];
process.exit(n);
=======
const log = console.log,
            err = console.error,
                  arg = process.argv[2];

if(typeof(arg) === 'undefined' || isNaN(Number(arg))) {
    err('命令行参数不正确');
      process.exit(1);

} else {
    log('退出码：', arg);
      process.exit(arg);

}
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
