// function twoOldestAges(ages){
//  ages = ages.sort((a, b) => a - b);
//  //console.log(ages);
//  console.log([ages[ages.length - 2], ages[ages.length - 1]]);
// }

function twoOldestAges(ages){
  console.log(ages.sort((a, b) => a - b).slice(-2));
}

twoOldestAges([1,5,87,45,8,8]);
