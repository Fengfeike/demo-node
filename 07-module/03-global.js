#!/usr/bin/node

<<<<<<< HEAD

=======
bal.pi = Math.PI;

global.circle = (radius) => {
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

global.objCircle = {
    diameter : (radius) => 2 * radius,
    circumference : (radius) => pi * 2 * radius,
    area : (radius) => pi * radius * radius

};
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
