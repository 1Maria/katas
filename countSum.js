// 8kyu Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  } else {
  console.log(input);
    let positives = [];
    let negatives = [];

    for (let i = 0; i < input.length; i++) {
      let currEl = input[i];
      currEl > 0 ? positives.push(currEl) : negatives.push(currEl);
    }

    let positiveCount = positives.length;
    let negativeSum = negatives.reduce((sum, num) => sum + num, 0);

    return [positiveCount, negativeSum];
  }
}

// A couple of small refactors
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  } else {
    let positives =[], negatives = [];

    for (let i = 0; i < input.length; i++) {
      let currEl = input[i];
      currEl > 0 ? positives.push(currEl) : negatives.push(currEl);
    }

    let positiveCount = positives.length;
    let negativeSum = negatives.reduce((sum, num) => sum + num, 0);

    return [positiveCount, negativeSum];
  }
}



countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]); //[10, -65]
