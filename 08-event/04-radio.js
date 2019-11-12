#!/usr/bin/node
<<<<<<< HEAD

const EventEmitter = require('events').EventEmitter,
      util = require('util');

function Radio(station){
 
  var self = this;

  for(var m in EventEmitter.prototype){
    this[m] = EventEmitter.prototype[m];
  }

  setTimeout(()=>{
    self.emit('open',station);
  },0);
  setTimeout(()=>{
    self.emit('stop',station);
  },5000);
}

util.inherits(Radio,EventEmitter);

=======
const EventEmitter = require('events').EventEmitter;

function Radio(station) {
    var that = this;
      
    for(var m in EventEmitter.prototype) {
          this[m] = EventEmitter.prototype[m];
            
    }

    setTimeout(() => {
          that.emit('play', station);
            
    }, 0);

    setTimeout(() => {
          that.emit('stop', station);
            
    }, 5000);

}

>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
module.exports = Radio;
