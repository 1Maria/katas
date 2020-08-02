function sumMix(x){
  console.log(x);
  for(var i = 0; i < x.length; i++) {
    //console.log(typeof x[i]);
    let current = x[i];
    if (typeof current == 'string') {
      // console.log(x[i]);
      let num = Number(current);
      // console.log(x[i]);
      x.splice(current, 1);
      // console.log(x[i]);
      //console.log(x[i]);
    //   console.log('string')
    // } else {
    //   console.log('number')
    }
    console.log(x);
  }

  //console.log(x);
  //newArray = x.forEach(element => console.log(element));//parseInt(element, 10));
  //console.log(newArray);
}

sumMix([9, 3, '7', '3']);

//22

//a totally separate day
function sumMix(x){
  return x.map(a => parseInt(a)).reduce((sum, num) => sum + num, 0);
}
