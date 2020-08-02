// function stray(numbers) {
//   let a = numbers[0];
//   let b = 0;
//   let aCount = 1;
//
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] === a) {
//       aCount++;
//     } else {
//       b = numbers[i];
//     }
//   }
//   if (aCount > 1) {
//     return b;
//   } else {
//     return a;
//   }
// }
//
//
// function stray(numbers) {
//   let a = numbers[0];
//   let b = 0;
//   let aCount = 1;
//
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] === a) {
//       aCount++;
//     } else {
//       b = numbers[i];
//     }
//   }
//   return aCount > 1 ? b : a;
// }

// function stray(numbers) {
//   let a = numbers[0];
//   let b = 0;
//   let aCount = 1;
//   let bCount = 0;
//   let count = 0;
//
//   console.log('b:'+ b);
//   for (let i = 1; !((aCount >= 2 && bCount >= 1) || (bCount >= 2)); i++) {
//     console.log('count:' + count);
//     count++;
//     console.log('count:' + count);
//     if (numbers[i] === a) {
//       console.log('a:'+ a, i+'th time');
//       console.log('aCount:' + aCount);
//       aCount++;
//       console.log('a:'+ a, i+'th time');
//       console.log('aCount:' + aCount);
//     } else {
//       console.log('b:'+ b, i+'th time');
//       console.log('bCount:' + bCount);
//       b = numbers[i];
//       bCount++;
//       console.log('b:'+ b, i+'th time');
//       console.log('bCount:' + bCount);
//     }
//   }
//   console.log('a:'+ a, 'b:'+ b);
//   console.log(aCount > 1 ? b : a);
// }
//
// stray([1, 1, 2]);

function stray(numbers) {
  let a = numbers[0];
  let b = 0;
  let aCount = 1;
  let bCount = 0;

 for (let i = 1; !((aCount >= 2 && bCount >= 1) || (bCount >= 2)); i++) {
    if (numbers[i] === a) {
      aCount++;
    } else {
      b = numbers[i];
      bCount++;
    }
  }
  return aCount > 1 ? b : a;
}
