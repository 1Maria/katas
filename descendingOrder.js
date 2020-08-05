function descendingOrder(n){
  if (n.toString().length > 1) {
    let sortedNums = n.toString().split('').sort((a, b) => b - a).join('');
    return parseInt(sortedNums);
  } else {
    return n;
  }
}

function descendingOrder(n){
  return (n.toString().length > 1) ? parseInt(n.toString().split('').sort((a, b) => b - a).join('')) : n;
}

function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a, b) => (b - a)).join(''));
}

descendingOrder(123456789);
