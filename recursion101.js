function solve(a,b){
   if (a === 0 || b === 0) {
   } else if (a >= 2 * b) {
     a = a - 2 * b;
     return solve(a, b);
   } else if (b >= 2 * a) {
     b = b - 2 * a;
     return solve(a, b);
   }
  return [a, b];
}
