#!/usr/bin/node
<<<<<<< HEAD

const log = console.log;
log('cpu:',process.arch);
log('os:',process.platform);
log('PID:',process.pid);
log('execPath:',process.execPath);
log('node.js ver:',process.version);
log('uid:',process.getuid());
log('gid:',process.getgid());
=======
const log = console.log;

log('architecture:', process.arch);
log('platform: %s\n', process.platform);

log('process id:', process.pid);
log('exePath: %s\n', process.execPath);

log('node version:', process.version);
log('user id:', process.getuid());
log('group id:', process.getgid());
log('cwd: %s\n', process.cwd());

log('rss:', process.memoryUsage().rss);
log('heapTotal:', process.memoryUsage().heapTotal);
log('heapUsed:', process.memoryUsage().heapUsed);
log('external: %s\n', process.memoryUsage().external);

log('env:', process.env);
log('host name:', process.env.HOSTNAME);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
