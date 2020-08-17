//Sum of all the multiples of 3 or 5 (7 kyu)
function findSum(n) {
  let sumNums = 0;
  for (let i = 0; i <= n; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sumNums += i;
    }
  }
  return sumNums;
}

function findSum(n) {
  return [...Array(n + 1).keys()]
  .filter(key => ((key % 3 === 0) || (key % 5 === 0)))
  .reduce((sum, num) => sum + num);
}

function findSum(n) {
 if (n < 3) return 0
 return (n % 3 === 0 || n % 5 === 0) ? n + findSum(n-1) : findSum(n-1)
}

findSum(5);
