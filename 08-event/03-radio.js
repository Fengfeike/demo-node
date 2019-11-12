#!/usr/bin/node
<<<<<<< HEAD

const EventEmitter = require('events').EventEmitter,
      util = require('util');

function Radio(station){
  EventEmitter.call(this);

  var self = this;

  setTimeout(()=>{
    self.emit('open',station);
  },0);
  setTimeout(()=>{
    self.emit('stop',station);
  },5000);
}

util.inherits(Radio,EventEmitter);
=======
t EventEmitter = require('events').EventEmitter,
        util         = require('util');

function Radio(station) {
    EventEmitter.call(this);

      var self = this;

      setTimeout(() => {
            self.emit('open', station);
              
      }, 0);

      setTimeout(() => {
            self.emit('stop', station);
              
      }, 5000);

}

util.inherits(Radio, EventEmitter);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c

module.exports = Radio;
