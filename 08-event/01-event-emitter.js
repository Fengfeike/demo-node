#!/usr/bin/node
<<<<<<< HEAD

const EventEmitter = require('events').EventEmitter;
var e = new EventEmitter();

setInterval(()=>{
  e.emit('hello');
},1000);

setTimeout(()=>{
  e.emit('bye');
},5000);

e.on('hello',()=>{
  console.log('hello world!');
});

e.on('bye',()=>{
  console.log('goodbye!');
  process.exit();
=======
const EventEmitter = require('events').EventEmitter;
var e = new EventEmitter();

setInterval(() => {
    e.emit('hello');

}, 1000);

setTimeout(() => {
    e.emit('bye');

}, 5000);

e.on('hello', () => {
    console.log('hello world!');

});

e.on('bye', () => {
    console.log('goodbye!');

    process.exit();

>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
});
