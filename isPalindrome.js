// function isPalindrome(x) {
  // x = x.toLowerCase()
  // console.log(x);
  // x = x.split('');
  // console.log(x);
  // x = x.reverse()
  // console.log(x);
  // x = x.toString()
  // console.log(x);

function isPalindrome(x) {
  x = x.toLowerCase()
  console.log(x.split('').reverse().join(''));
  if (x === x.split('').reverse().join('')) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome('aba');
isPalindrome('Aba');
