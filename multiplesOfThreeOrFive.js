function solution(number){
  return [...Array(Math.abs(number)).keys()]
    .filter(num => num % 3 === 0 || num % 5 === 0)
    .reduce((sum, num) => sum + num, 0);
}

function solution(number){
  let multiples = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples += i;
    }
  }
  return multiples;
}

function solution(number){
  return [...new Array(Math.abs(number))].map((_, i) => i)
    .filter(num => num % 3 === 0 || num % 5 === 0)
    .reduce((sum, num) => sum + num, 0);
}

solution(10)
