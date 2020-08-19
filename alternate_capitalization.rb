def capitalize(s)
  [s.chars.each_with_index.map { |x, i| i % 2 == 0 ? x.upcase : x }.join(""),
   s.chars.each_with_index.map { |x, i| i % 2 != 0 ? x.upcase : x }.join("")]
end

def capitalize(s)
  [s.chars.each_with_index.map { |x, i| i % 2 == 0 ? x.upcase : x }.join,
   s.chars.each_with_index.map { |x, i| i % 2 != 0 ? x.upcase : x }.join]
end

def capitalize(s)
  result = s.chars.each_with_index.map { |x, i| i % 2 == 0 ? x.upcase : x }.join
  return [result, result.swapcase]
end

def capitalize(s)
  result = s.chars.each_with_index.map { |x, i| i.even? ? x.upcase : x }.join
  return [result, result.swapcase]
end

def capitalize(s)
  result = s.chars.each_with_index.map { |x, i| i.even? ? x.capitalize! : x }.join
  return [result, result.swapcase]
end

capitalize("abcdef") #['AbCdEf', 'aBcDeF']
