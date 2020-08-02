// function isDivisible(n, x, y) {
//   if ((n % x === 0) && (n % y === 0)) {
//     console.log(true);
//     // return true;
//   } else {
//     console.log(false);
//     // return false;
//   }
// }

function isDivisible(n, x, y) {
  ((n % x === 0) && (n % y === 0)) ? console.log(true) : console.log(false);
}

isDivisible(3, 3, 4);
isDivisible(12, 3, 4);
