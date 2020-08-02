function noSpace(x){
  return x.split(' ').join('')
}

function noSpace(x){
  currentString = x;
  while (currentString.includes(' ')) {
    currentString = currentString.replace(" ", "");
  }
  return currentString;
}

function noSpace(x){
  currentString = x;
  while (currentString !== currentString.replace(' ', '')) {
    currentString = currentString.replace(' ', '');
  }
  return currentString;
}
