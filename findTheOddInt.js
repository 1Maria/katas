//Thinking through on codewars
function findOdd(A) {
  let counts = {};

  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
//     Object.keys(counts[num]) = Object.keys(counts[num]) ? Object.keys(counts[num]) + 1 : 1;
  }
//   Object.keys(counts).filter(count => count % 2 != 0);
  console.log(counts, "Arghhhh");

//   let oddValue = Object.values(counts).filter(count => count % 2 == 0);
  for (const [key, value] of Object.entries(counts)) {
    if (value % 2 != 0) {
      return parseInt(key);
    }
    console.log(`${key}: ${value}`);
  }
//   return Object.values(counts[oddValue]);
}

//cleaned up version
function findOdd(A) {
  let counts = {};

  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  for (const [key, value] of Object.entries(counts)) {
    if (value % 2 != 0) {
      return parseInt(key);
    }
  }
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]); //5
