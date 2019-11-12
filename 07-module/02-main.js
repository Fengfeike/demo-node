#!/usr/bin/node
<<<<<<< HEAD

/*const p = require('./02-export-var');

console.dir(module);
console.log(p);*/

/*const circle = require ('./02-export-function');
console.log('r=10,circle area:%d',circle (10).area());
console.log('r=10,circle circumference:%d',circle(10).circumference());
cobsole.dir(module);*/

/*const circle = require('./02-export-object'),
      log= console.log;
log('r=10,circle diameter:',circle.diameter(10));
log('r=10,circle area:',circle.area(10));
console.dir(module);*/

const area = require('./02-export-o2');

module.exports.circumferences = (radius)=>Math.PI*2*radius;
module.exports.area=(radius)=>Math.PI*radius*radius;
console.dir(module);
=======
/*
var pi = require('./02-export-var.js');
 console.log('\nPI:', pi);
 var circle = require('./02-export-function.js');
 console.log('\narea:\t\t', circle(20).area());
 console.log('circumference:\t', circle(20).circumference());
 */
 //var circle = require('./02-export-object');const circle = require('./02-export-object2.js');

const circle = require('./02-export-object2.js');

console.log('\ndiameter:\t', circle.diameter(10));
console.log('circumference:\t', circle.circumference(10));
console.log('area:\t\t', circle.area(10));
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
