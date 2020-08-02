function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    let interestAfterTax = (principal * interest) * (1 - tax);
    principal += interestAfterTax;
    years++;
  }
  return years;
}

function calculateYears(principal, interest, tax, desired, years) {
  for (years = 0; principal < desired; years++) {
    let interestAfterTax = (principal * interest) * (1 - tax);
    principal += interestAfterTax;
  }
  return years;
}

calculateYears(1000, 0.05, 0.18, 1100) //3
