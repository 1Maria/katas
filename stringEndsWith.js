function solution(str, ending){
  let endLength = ending.length;
  let strEnding = str.slice(-endLength);
  return ending == strEnding ? true : false;
}

function solution(str, ending){
  return (ending == '' || ending == str.slice(- ending.length));
}
