function getGrade (s1, s2, s3) {
  let sumNum = s1 + s2 + s3;
  let meanNum = sumNum / 3;
  
  if ((90 <= meanNum) && (meanNum <= 100)) {
    console.log('A');
  } else if ((80 <= meanNum) && (meanNum < 90)) {
    console.log('B');
  } else if ((70 <= meanNum) && (meanNum < 80)) {
    console.log('C');
  } else if ((60 <= meanNum) && (meanNum < 70)) {
    console.log('D');
  } else {
    console.log('F');
  }
}

getGrade(70, 70, 100);
