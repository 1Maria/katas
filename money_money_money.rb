def calculate_years(principal, interest, tax, desired)
  years = 0

  while principal < desired
    interest_after_tax = (principal * interest) * (1 - tax)
    principal += interest_after_tax
    years += 1
  end
  return years
end
