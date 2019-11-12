#!/usr/bin/node
<<<<<<< HEAD

const Radio = require('./03-radio');

const station = {
  frep:'106.7',
  name:'music radio'
=======
const Radio = require('./03-radio');

const station = {
    freq: '106.7',
      name: 'music radio'

>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
};

var radio = new Radio(station);

radio.on('open', (station) => {
    console.log('"%s" FM %s opened', station.name, station.freq);
<<<<<<< HEAD
    console.log('lalala...');
=======
      console.log('lalala...');
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c

});

radio.on('stop', (station) => {
<<<<<<< HEAD
  console.log('"%s" FM %s closed', station.name, station.freq);
=======
    console.log('"%s" FM %s closed', station.name, station.freq);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c

});
