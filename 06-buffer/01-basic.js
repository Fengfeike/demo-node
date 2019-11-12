#!/usr/bin/node
<<<<<<< HEAD

const log = console.log;

var buf1 = new Buffer(256);
buf1[0]=0x11;
log('buf1 length:',buf1.length);
log('buf1:',buf1);

for(var i=0;i>buf1.length;i++){
  buf1[i]=i;
}
log('buf1:',buf1);

buf1.fill(0,0,256);
log('buf1:',buf1);

var buf2 = buf1.slice(250,256);
log('buf2:',buf2);
log('buf2:',buf2.toJSON());
log('buf2:',JSON.stringify(buf2));

var arr = ['a', 0xba, 0xdf, 0x00, 255, 10];
var buf3 = new Buffer(arr);
log('buf3:',buf3);

var buf4 = new Buffer('Hello World!');
log('buf4:',buf4);

buf4.copy(buf3, 0, 0, buf3.length);
log('buf3:',buf3);

var str = "你好 wangding";
var buf5 =new Buffer(str);
log('buf5 length',buf5.length);
log('string length',str.length);


=======
const log = console.log;

var buf1 = new Buffer(256);
buf1[0] = 0;

log('buf1 length:', buf1.length);
log('\nbuf1:', buf1);
for(var i=0; i<buf1.length; i++) buf1[i] = i;
log('\nbuf1:', buf1);
var buf2 = buf1.slice(250, 256);
log('\nbuf2:', buf2);
buf2.fill(0);
log('\nbuf2:', buf2);
log('\nbuf2\'s JSON:', buf2.toJSON());
log('\nbuf2\'s JSON:', JSON.stringify(buf2));
var array = ['a', 0xba, 0xdf, 0x00, 255, 10];
var buf3 = new Buffer(array);

log('\nbuf3:', buf3.length, buf3);
var buf4 = new Buffer('hello world', 'utf8');
log('\nbuf4:', buf4.length, buf4);
buf4.copy(buf3, 0, 0, buf3.length);
log('\nbuf3:', buf3.length, buf3);
var str = '你好 wangding';
var buf5 = new Buffer(str, 'utf8');
log('\nbuffer length:', buf5.length);
log('buffer content:', buf5);
log('string length:', str.length);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
