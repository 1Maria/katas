// First solution
function add(num1, num2) {
  let firstArray = Array.from(num1.toString()).map(Number).reverse();
  let secondArray = Array.from(num2.toString()).map(Number).reverse();
  let sumArray = [];

  for (let i = 0; i < firstArray.length; i++) {
    sumArray.unshift((firstArray[i] || 0) + (secondArray[i] || 0));
  }
  if (secondArray.length > firstArray.length) {
    sumArray.unshift(secondArray[secondArray.length - 1]);
  }
  return Number(sumArray.join(''));
}

//second solution
function add(num1, num2) {
  firstArray = Math.max(num1, num2).toString().split('').map(Number).reverse();
  secondArray = Math.min(num1, num2).toString().split('').map(Number).reverse();
  sum = '';

  for (let i = 0; i < firstArray.length; i++) {
    sum = (firstArray[i] || 0) + (secondArray[i] || 0) + sum;
  }
  return Number(sum);
}

console.log(add(16, 18));      // 214
console.log(add(2, 11));       // 13
console.log(add(26, 39));      // 515
console.log(add(122, 81));     // 1103
console.log(add(1222, 30277)); // 31499
