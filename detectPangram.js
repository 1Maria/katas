// Working on it
// function isPangram(string){
//   console.log(string);
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// //   let alphaString = alphabet.split('');
//   let arr = string.toLowerCase().replace(/[^a-z]/g, '').split('');
//   let uniq = [...new Set(arr)];
//   console.log(uniq);
//   let uniqueString = uniq.sort().join('');
//   console.log(uniqueString);
//   if (alphabet === uniqueString) {
//     return true;
//   } else {
//     return false;
//   }
// }

// replace(/\W/g, '')

// Cleaned it up
function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let arr = string.toLowerCase().replace(/[^a-z]/g, '').split('');
  let uniq = [...new Set(arr)];
  let uniqueString = uniq.sort().join('');
  if (alphabet === uniqueString) {
    return true;
  } else {
    return false;
  }
}

function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let arr = string.toLowerCase().replace(/[^a-z]/g, '').split('');
  let uniqueString = [...new Set(arr)].sort().join('');
   return alphabet === uniqueString ? true : false;
}

function isPangram(string){
  //oopsie! this isn't an array
  let arr = string.toLowerCase().replace(/[^a-z]/g, '');
  let uniqueString = [...new Set(arr)].sort();
  return uniqueString.length === 26;
}

isPangram("The quick brown fox jumps over the lazy dog.");
