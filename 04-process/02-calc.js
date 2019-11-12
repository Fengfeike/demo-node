#!/usr/bin/node
<<<<<<< HEAD

var fn=process.argv[2];
console.log(fn,'=',eval(fn));
=======
const log = console.log,
            arg = process.argv[2];

if(typeof(arg) === 'undefined' ||
        arg === '--help' ||
        arg === '-h') {
            help();

        } else {
            calc();

        }

function help() {
    const msg = '' 
          + 'usage: cmd-name [OPTION] [expression]\n'
          + 'evaluate the expression.\n'
          + '\n'
          + 'Mandatory arguments to long options are mandatory for short options too.\n'
          + '  -h, --help output help information and exit\n';

      log(msg);

}

function calc() {
    log(arg + '=%s', eval(arg));

}
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
