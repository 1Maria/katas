//oops - checked for positive twice in this first one!
function positiveSum(arr) {
  return arr.filter(a => a > 0).reduce((a, b) => b > 0 ? a += b : a, 0);
}

function positiveSum(arr) {
  let totalSum = 0;
  arr.forEach(num => {
    if (num > 0) {
      totalSum += num;
    }
  });
  return totalSum;
}

function positiveSum(arr) {
  return arr.filter(a => a > 0).reduce((a, b) => a += b, 0);
}

function positiveSum(arr) {
  return arr.reduce((a, b) => b > 0 ? a += b : a, 0);
}

//from a previous day (probably got help from cutie :))
function positiveSum(arr) {
  var sumPositives = 0;
  arr.forEach(function(num) {
    if (num > 0) {
      sumPositives += num;
    }
  });
  return sumPositives;
}

positiveSum([1,2,3,4,5]
