// const areaOrPerimeter = function(l , w) {
//   if (l === w) {
//     console.log(l * w);
//   } else {
//     console.log((2 * l) + (2 * w));
//   }
// };

const areaOrPerimeter = function(l , w) {
  console.log(l === w ? l * w : (2 * l) + (2 * w));
};

areaOrPerimeter(4, 4);
areaOrPerimeter(6, 10);
