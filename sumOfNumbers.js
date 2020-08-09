//this one doesn't actually work, as predicted
// function getSum( a, b ) {
//   return a += b;
// }

function getSum( a, b ) {
  let totalSum = 0;
  for ( let i = Math.min(a, b); i <= Math.max(a, b); i++ ) {
     totalSum += i;
  }
  return totalSum;
}

// I never quite finished thinking through this one
// function getSum( a, b ) {
//   let sortedNums = [a, b].sort((a, b) => (a - b));
//   let arrayLength = b - a;
//   console.log([...Array(arrayLength)]);
// //   console.log(sortedNums);
//
// //    return (Math.min(a, b)...Math.max(a, b)).reduce(first, second) => first + second;
// }

function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

getSum(0,-1);
