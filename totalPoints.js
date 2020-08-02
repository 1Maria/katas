// function points(games) {
//   let totalScore = 0;
//   for (let i = 0; i < games.length; i++) {
//     let comp = games[i].split(':');
//     let x = parseInt(comp[0]);
//     let y = parseInt(comp[1]);
//     if (x > y) {
//       totalScore += 3;
//     } else if (x === y) {
//       totalScore += 1;
//     }
//   }
//   return totalScore;
// }

function points(games) {
  let totalScore = 0;
  for (let i = 0; i < games.length; i++) {
    let [x, y] = games[i].split(':').map(x => parseInt(x));
    totalScore += (x > y ? 3 : (x == y ? 1 : 0));
  }
  return totalScore;
}

points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])
