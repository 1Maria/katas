def sum_two_smallest_numbers(numbers)
  numbers.sort!
  numbers[0] + numbers[1]
end

def sum_two_smallest_numbers(numbers)
  numbers.min(2).reduce(:+)
end

def sum_two_smallest_numbers(numbers)
  numbers.min(2).sum
end

sum_two_smallest_numbers([5, 8, 12, 18, 22])
