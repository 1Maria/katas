function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i+=integer) {
     arr.push(i);
  }
  return arr;
}

function findMultiples(integer, limit) {
  return Array(Math.floor(limit/integer)).fill(0).map((n, i) => (integer * (i + 1)));
}

// function findMultiples(integer, limit) {
//   let numMultiples = limit/integer;
//   let arr = [];
//   for (let i = 1; i <= numMultiples; i++) {
//      arr.push(integer * i);
//   }
//   return arr;
// }

// This one is incomplete 
function findMultiples(integer, limit) {
  let numMultiples = limit/integer;
  console.log(Array.from(numMultiples))
  //return (Array(numMultiples)).map((n, i) => (integer * (i + 1)));
}
