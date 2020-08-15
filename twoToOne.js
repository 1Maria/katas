function longest(s1, s2) {
  let str = s1 + s2;
  let sortedString = str.split('').sort();
  const distinctValues = [...new Set(sortedString)];
  return distinctValues.join('');
}

const longest = (s1, s2) => {
 return [...new Set(s1 + s2)].sort().join('');
}

function longest(s1, s2) {
  return [...new Set([...s1.split(''), ...s2.split('')])].sort().join('');
}

longest("aretheyhere", "yestheyarehere");
