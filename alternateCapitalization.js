function capitalize(s){
  let first = s.split('');
  let second = s.split('');
  let firstString = '';
  let secondString = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      first[i] = first[i].toUpperCase();
    } else {
      second[i] = second[i].toUpperCase();
    }
    firstString = first.join('');
    secondString = second.join('');
  }
  return [firstString, secondString];
};

function capitalize(s){
  return [s.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c).join(''),
          s.split('').map((c, i) => i % 2 !== 0 ? c.toUpperCase() : c).join('')];
};

function capitalize(s){
  return [[...s].map((c, i) => i % 2 === 0 ? c.toUpperCase() : c).join(''),
          [...s].map((c, i) => i % 2 !== 0 ? c.toUpperCase() : c).join('')];
};

function capitalize (s) {
  return [0,1].map(arr => [...s].map((c,i) => i % 2 === arr ? c.toUpperCase() : c).join(''));
};

capitalize("abcdef"); //['AbCdEf', 'aBcDeF']
