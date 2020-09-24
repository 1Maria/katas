# first solution
def silly_add(a, b)
  max_num = [a, b].max
  min_num = [a, b].min
  first_array = max_num.to_s.chars.reverse.map(&:to_i)
  second_array = min_num.to_s.chars.reverse.map(&:to_i)
  sum = '';

  first_array.each_index {|i| sum = ((first_array[i] ||= 0) + (second_array[i] ||= 0)).to_s + sum }
  return sum.to_i
end

# refactor
def silly_add(a, b)
  first_array = [a, b].max.digits
  second_array = [a, b].min.digits
  sum = '';

  first_array.each_index {|i| sum = ((first_array[i] ||= 0) + (second_array[i] ||= 0)).to_s + sum }
  return sum.to_i
end

# second solution
def silly_add(a, b)
  larger_array = [a, b].max.digits
  smaller_array = [a, b].min.digits

  smaller_array << 0 until larger_array.size == smaller_array.size
  [smaller_array.reverse, larger_array.reverse].transpose.map {|x| x.reduce(:+)}.join.to_i
end

puts silly_add(16, 18)      # 214
puts silly_add(2, 11)       # 13
puts silly_add(26, 39)      # 515
puts silly_add(122, 81)     # 1103
puts silly_add(1222, 30277) # 31499
