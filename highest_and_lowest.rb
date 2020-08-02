def high_and_low(numbers)
  sorted_numbers = numbers.split(" ").map { |num| num.to_i}.sort!
  "#{sorted_numbers[sorted_numbers.length() - 1]} #{sorted_numbers[0]}"
end

def high_and_low(numbers)
  numbers_array = numbers.split(" ").map { |num| num.to_i }
  "#{numbers_array.max()} #{numbers_array.min()}"
end

high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") #524 -214
