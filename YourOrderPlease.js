function order(words){
  if (words.length <= 1) return words;
  
  let remainingWords = words.split(" ");
  let finalString = "";
  let currNum = 1;
  
  while (remainingWords.length > 1) {
    for (let i = 0; i < remainingWords.length; i++) {
      if (remainingWords[i].includes(currNum)) {
        finalString = finalString.concat(remainingWords[i] + ' ');
        remainingWords.splice(i, 1);
        currNum++;
        i = 0;
      }
    }
  }

  finalString = finalString.concat(remainingWords[0]);
  return finalString;
}



