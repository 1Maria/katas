function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

function minMax(arr){
  let sortedArray = arr.sort(function(a, b) {
    return a - b;
  });
  return [sortedArray[0], sortedArray[sortedArray.length - 1]];
}

function minMax(arr){
  let lowestValue = arr[0];
  let highestValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowestValue) {
      lowestValue = arr[i];
    }
    if (arr[i] > highestValue) {
      highestValue = arr[i];
    }
  }
  return [lowestValue, highestValue];
}

function minMax(arr){
  let lowestValue = arr[0];
  let highestValue = arr[0];
  for (const element of arr) {
    if (element < lowestValue) {
      lowestValue = element;
    }
    if (element > highestValue) {
      highestValue = element;
    }
  }
  return [lowestValue, highestValue];
}
