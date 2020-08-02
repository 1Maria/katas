//testing why it's not working (was trying to use >>)
function accum(s) {
	let arr = s.split("");
  console.log(arr);
//   console.log(arr[0].toUpperCase());
  let newArray = [];
  console.log(newArray);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase() + " upper case")
    console.log(arr[i].toLowerCase() + " lower case")
//     console.log(arr[0].toUpperCase() + "second");
    console.log(arr[i].toUpperCase() + (arr[i].toLowerCase().repeat(i)));
    newArray.push(arr[i].toUpperCase() + (arr[i].toLowerCase().repeat(i)));
    console.log(newArray + "newArray");
  }
  console.log(newArray.join());
  // return newArray.join();
}

function accum(s) {
	let arr = s.split("");
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].toUpperCase() + (arr[i].toLowerCase().repeat(i)));
  }
  console.log(newArray.join());
  return newArray.join('-');
}

function accum(s) {
	return s.split("").map((a, i) => a.toUpperCase() + a.toLowerCase().repeat(i)).join("-");
}

accum("ZpglnRxqenU");
