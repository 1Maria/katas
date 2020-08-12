function digital_root(n) {
  let arr = n.toString().split('');
  let numArr = arr.map(Number);
  let newNum = numArr.reduce((sum, num) => sum + num);
  if (newNum.toString().length <= 1) {
    return newNum;
  } else {
    return digital_root(newNum);
  }
}

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

function digital_root(n) {
  if (n < 10) return n;
  return digital_root(n % 10 + digital_root(Math.floor(n / 10)));
}

digital_root(16);
