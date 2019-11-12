#!/usr/bin/node
<<<<<<< HEAD

function circle(radius){
  function area(){
    return Math.PI*radius*radius;
  }

  function circumference(){
    return 2* Math.PI * radius; 
  }

  return {
    area:area,
    circumference:circumference;
  }
}

concsole.dir(module);
module.exports = circle;
console.log(p);
=======
t pi = Math.PI;

module.exports = (radius) => {
  function circumference() {
        return pi * 2 * radius;
          
  }

  function area() {
        return pi * radius * radius;
          
  }

  return {
        area: area,
              circumference: circumference
                  
  };

};

console.dir(module);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
