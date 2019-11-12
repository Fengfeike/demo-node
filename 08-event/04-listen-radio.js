#!/usr/bin/node
<<<<<<< HEAD

const Radio = require('./04-radio');

const station = {
  frep:'106.7',
  name:'music radio'
};

var radio = new Radio(station);

radio.on('open', (station) => {
    console.log('"%s" FM %s opened', station.name, station.freq);
    console.log('lalala...');

});

radio.on('stop', (station) => {
  console.log('"%s" FM %s closed', station.name, station.freq);
=======
const Radio   = require('./04-radio.js'),
      station = {
                'freq': '106.7',
                        'name': 'music Radio'
                                
      };

var r = new Radio(station);

r.on('play', (station) => {
    console.log('FM %s %s is playing!', station.freq, station.name);

});

r.on('stop', (station) => {
    console.log('FM %s %s is stop!', station.freq, station.name);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c

});
