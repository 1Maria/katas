//working on it
function highAndLow(numbers) {
  let sortedNumbers = numbers.split(" ").sort((a, b) => (a - b));
  //return sorted_numbers.splice(1, -1).join(" ");
  console.log(sorted_numbers)
  console.log(sorted_numbers.pop(), sorted_numbers.shift());
}

//cleaned up version (which doesn't work if there is only one element in the array)
function highAndLow(numbers) {
  let sortedNumbers = numbers.split(" ").sort((a, b) => (a - b));
  return sortedNumbers.pop() + " " + sortedNumbers.shift();
}

//working on it again
function highAndLow(numbers) {
  let sortedNumbers = numbers.split(" ").sort((a, b) => (a - b));
  console.log(sortedNumbers[0]);
  console.log(sortedNumbers[sortedNumbers.length - 1]);
  console.log(sortedNumbers[0] + " " + sortedNumbers[sortedNumbers.length - 1]);
  // return sortedNumbers[0] + " " + sortedNumbers[-1];
}

//cleaned up version - this time it works!
function highAndLow(numbers) {
  let sortedNumbers = numbers.split(" ").sort((a, b) => (a - b));
  return sortedNumbers[sortedNumbers.length - 1] + " " + sortedNumbers[0];
}

function highAndLow(numbers){
  let sortedNumbers = numbers.split(" ");
  return `${Math.max(...sortedNumbers)} ${Math.min(...sortedNumbers)}`
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") //524 -214
