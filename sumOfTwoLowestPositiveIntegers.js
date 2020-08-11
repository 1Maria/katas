function sumTwoSmallestNumbers(numbers) {
  let sortNums = numbers.sort((a, b) => a - b);
  return sortNums[0] + sortNums[1];
}

// WIP ALMOST works
// function sumTwoSmallestNumbers(numbers) {
//   let sumNums = [];
//   console.log(Math.min(...numbers));
//   sumNums.push(Math.min(...numbers));
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === Math.min(...numbers)) {
//       numbers.splice(i, 1);
//       sumNums.push(Math.min(...numbers));
//     }
//   }
//   console.log(sumNums);
//   return sumNums.reduce((sum, num) => sum + num);
// }

function sumTwoSmallestNumbers(numbers) {
  let sumNums = [];
  sumNums.push(Math.min(...numbers));
  numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
  sumNums.push(Math.min(...numbers));
  return sumNums.reduce((sum, num) => sum + num);
}

function sumTwoSmallestNumbers(numbers) {
  let sumNums = [];
  sumNums.push(Math.min(...numbers));
  numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
  sumNums.push(Math.min(...numbers));
  return sumNums[0] + sumNums[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
