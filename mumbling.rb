# def accum(s)
#   return s.split("").map.with_index { |x, i| x.upcase + x.downcase * i }.join("-")
# end
#
# def accum(s)
#   s.split("").map.with_index { |x, i| x.upcase + x.downcase * i }.join("-")
# end

def accum(s)
	arr = s.split("")
  new_array = []

  # print arr
  # print arr[1].upcase

  for i in arr do
    print arr[i]
    # new_array.push(arr[i].upcase + (arr[i].downcase * i))
  end
  # new.array.join("-")
end

# testing
# def accum(s)
# 	letters = s.split("")
#   accumulated_letters = []
#   upper_limit = letters.length()
#
# #   (arr.length).times do |i|
# #   (0..arr.length - 1).each do |i|
# #   letters.each do |letter|
# #   for i in 0..upper_limit
# #     print letters[i]
# #     accumulated_letters.push(letters[i].upcase + (letters[i].downcase * i))
# #   end
#
#   i = 0
#   while i < letters.length
#     print letters[i]
#     accumulated_letters.push(letters[i].upcase + (letters[i].downcase * i))
#     i += 1
#   end
#
#   accumulated_letters.join("-")
# end

# cleaned up version of above
def accum(s)
	letters = s.split("")
  accumulated_letters = []

  i = 0
  while i < letters.length()
    accumulated_letters.push(letters[i].upcase + (letters[i].downcase * i))
    i += 1
  end

  accumulated_letters.join("-")
end

accum("ZpglnRxqenU")
