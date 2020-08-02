def odd_or_even(array)
  total_sum = array.inject(:+)
  puts array.length == 0 || total_sum % 2 == 0 ? "even" : "odd"
end

odd_or_even([0])
odd_or_even([1])
odd_or_even([])

odd_or_even([0, 1, 5])
