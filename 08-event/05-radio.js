#!/usr/bin/node
<<<<<<< HEAD


function Radio(station){
  var _listeners = {
    //'play':[fn1,fn2,fn3],
   // 'stop':[]
  }
 // EventEmitter.call(this);


  setTimeout(()=>{
    emit('open',station);
  },0);
  setTimeout(()=>{
    emit('stop',station);
  },5000);


  function emit(evt,arg){
    if(typeof(_listeners[evt])==='undefined'){
      console.error('Error: %s not defined',evt);
      process.exit();
    }
     _listeners[evt].forEach((fn)=>{
       fn.call(this,arg);
    });
  }

  this.on = (evt, fn) => {
    if(typeof(_listeners[evt]) === 'undefined') {
      _listeners[evt] = [];              
    }
    _listeners[evt].push(fn);
  }
}
=======
var Radio = function(station) {
    var _listeners = {};

    setTimeout(() => {
          emit('open', station);
            
    }, 0);

    setTimeout(() => {
          emit('stop', station);
            
    }, 5000);

    function emit(evt, arg) {
      if(typeof(_listeners[evt]) === 'undefined') {
              console.error('Error: %s not defined!', evt);
                    process.exit(1);
                        
      }

      _listeners[evt].forEach((fn) => {
              fn.call(this, arg);
                  
      });
        
    }

    this.on = (evt, fn) => {
      if(typeof(_listeners[evt]) === 'undefined') {
              _listeners[evt] = [];
                  
      }

          _listeners[evt].push(fn);
            
    };

};

>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
module.exports = Radio;
