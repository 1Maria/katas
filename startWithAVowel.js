function vowelStart(str){
  let newString = str.toLowerCase().replace(/[^0-9a-z]/g, '');
  newString = newString.replace(/([aeiou])/g, ' $1');
  return newString.trim();
}

//refactor
function vowelStart(str){
  return str.toLowerCase().replace(/[^0-9a-z]/g, '').replace(/([aeiou])/g, ' $1').trim();
}

console.log(vowelStart('It is beautiful weather today!')); // 'it isb e a ut if ulw e ath ert od ay'
