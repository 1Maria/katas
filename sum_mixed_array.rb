#Feb 10 2020
def sumMix(x)
  for i in x do
    # if x[i].class
    # if x[i].is_a? String
    #
    # end

    curr = x[i]
    puts "#{curr}"
    #printf x[i]

    # puts x[0]
    # puts x[1]
    # puts x[2]
    # puts x[3]

    # if (x[i]).is_a? String
    #   puts "String"
    # end
    # x.map { |i| x[i].is_a? String ? x[i] : x[i].to_i }
  end
  # return x
end

sumMix([9, 3, '7', '3'])


# p array.map { |x| x == 4 ? 'Z' : x }

# => [1, 2, 3, 'Z']

#Aug 2 2020

def sum_mix(x)
  return x.map { |a| a.to_i }.reduce { |sum, num| sum + num }
end

def sum_mix(x)
  x.sum(&:to_i)
end
