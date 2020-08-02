// function solve(s){
//   let arr = s.split('');
//   let up = 0;
//   let down = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].toUpperCase()) {
//       up += 1;
//     } else {
//       down += 1;
//     }
//   }
//   if (up > down) {
//     return s.toUpperCase();
//   } else {
//     return s.toLowerCase();
//   }
// }

function solve(s){
  let caseValue = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === s[i].toUpperCase() ? caseValue += 1 : caseValue -= 1;
  }
  return caseValue > 0 ? s.toUpperCase() : s.toLowerCase();
}
