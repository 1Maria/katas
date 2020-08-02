function isVeryEvenNumber(n) {
  //console.log(2.toString().length);
  let arr = Array.from(n.toString()).map(Number);
  console.log(arr);
  let newNum = arr.reduce((a, b) => (a + b));
  console.log(newNum);
  // while (newNum.toString().length !== 1) {
  //   newNum = arr.reduce((a, b) => (a + b));
  // }
  // newNum.toString().length = 0;
  while (newNum.toString().length !== 1) {
    let newArr = Array.from(newNum.toString()).map(Number);
    newNum = newArr.reduce((a, b) => (a + b));
    console.log(newNum);
  }
  console.log(newNum);
  if ((n.toString().length === 1 && n % 2 === 0) || (newNum.toString().length === 1 && newNum % 2 === 0)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isVeryEvenNumber(2);     //true
isVeryEvenNumber(5);     //false
isVeryEvenNumber(53);    //true
isVeryEvenNumber(5335);  //false
isVeryEvenNumber(533);   //true
isVeryEvenNumber(5602196827855514); //true
