#!/usr/bin/node
<<<<<<< HEAD

const Dog = require('./02-dog.js');

var  taidi = new Dog('taidi',4);
var zangao = new Dog('zangao',9);
taidi.on('bark',onBark);
zangao.on('bark',onBark);

function onBark(){
  console.log('%s barked! energy:%s',this.name(),this.energy());
=======
onst Dog = require('./02-dog.js');

var taidi = new Dog('taidi', 4);
var zangao = new Dog('zangao', 8);
taidi.on('bark', onBark);
zangao.on('bark', onBark);

function onBark() {
    console.log('%s barked! energy: %s', this.name(), this.energy());
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
}
