function differenceInAges(ages){
  new_array = ages.sort(function(a, b){return a-b});
  console.log(new_array);
  let youngest = new_array[0];
  let oldest = new_array[new_array.length - 1];
  let difference = oldest - youngest;
  console.log([youngest, oldest, difference]);
}

differenceInAges([82, 15, 6, 38, 35])
