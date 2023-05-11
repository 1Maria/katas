function SeriesSum(n) {
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
    sum += 1/(3 * i + 1);
  }
  
  return sum.toFixed(2);
}


function SeriesSum(n) {
    for (var sum = 0, i = 0; i < n; i++) {
      sum += 1 / (1 + i * 3)
    }
    
    return sum.toFixed(2)
  }