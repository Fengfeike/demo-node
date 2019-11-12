#!/usr/bin/node
<<<<<<< HEAD

var circle = {
/**
 *计算圆的面积，周长，直径
 *
 * @param radius
 * @returns {undefined}
 */

  'area':function(radius){
        return Math.PI*radius*radius;
          
  },
  'circumference':function(radius){
        return 2*Math.PI*radius;
          
  },
  'diameter':function(radius){
        return 2*radius;
          
  }

};
console.dir(module);
module.exports = circle;

=======
t pi = Math.PI;

module.exports = {
    diameter: (radius) => 2 * radius,
    circumference: (radius) => pi * 2 * radius,
     area: (radius) => pi * radius * radius

};

console.dir(module);
>>>>>>> 5b18961221f02fe7c2c8d8e452b50e43550c704c
