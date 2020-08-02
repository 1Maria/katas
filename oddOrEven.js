// function oddOrEven(array) {
//    let totalSum = array.reduce((a, b) => a + b, 0);
//    console.log(totalSum);
//    if (array.length === 0) {
//      console.log("even");
//    } else if (totalSum % 2 === 0) {
//      console.log("even");
//    } else {
//      console.log("odd");
//    }
// }

function oddOrEven(array) {
   let totalSum = array.reduce((a, b) => a + b, 0);
   console.log(array.length === 0 || totalSum % 2 === 0 ? "even" : "odd");
}

oddOrEven([0]);
oddOrEven([1]);
oddOrEven([]);

oddOrEven([0, 1, 5]);
