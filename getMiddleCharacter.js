function getMiddle(s) {
  let wordLength = s.length;
  if (wordLength % 2 === 0) {
    return s[(wordLength/2) - 1] + s[wordLength/2];
  } else {
    return s[Math.floor(wordLength/2)];
  }
}

function getMiddle(s) {
  let wordLength = s.length;
  return wordLength % 2 === 0 ? s[(wordLength/2) - 1] + s[wordLength/2] : s[Math.floor(wordLength/2)];
}

function getMiddle(s) {
  let wordLength = s.length;
  let mid = wordLength/2;
  return wordLength % 2 === 0 ? s[mid - 1] + s[mid] : s[Math.floor(mid)];
}
